import type {ThunkConfig} from '@/app/providers/StoreProvider';
import {selectArticleDetailsData} from '@/entities/Article';
import type {Comment} from '@/entities/Comment';
import {selectUserAuthData} from '@/entities/User';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
	fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const checkData = (data: Comment) => {
	if (!data) {
		throw new Error();
	}
};

export const sendComment = createAsyncThunk<Comment, string, ThunkConfig<string>>(
	'addCommentForm/sendComment',
	async (text, thunkAPI) => {
		const userId = selectUserAuthData(thunkAPI.getState())?.id;
		const articleId = selectArticleDetailsData(thunkAPI.getState())?.id;

		if (!userId || !text || !articleId) {
			return thunkAPI.rejectWithValue('no data');
		}

		try {
			const response = await thunkAPI.extra.api.post<Comment>('/comments', {
				articleId,
				userId,
				text,
			});
			checkData(response.data);

			void thunkAPI.dispatch(fetchCommentsByArticleId(articleId));

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
