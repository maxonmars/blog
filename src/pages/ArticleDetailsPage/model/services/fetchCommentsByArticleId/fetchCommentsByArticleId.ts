import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Comment} from 'entities/Comment';

const checkData = (data: Comment[]) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchCommentsByArticleId = createAsyncThunk<Comment[], string | undefined, ThunkConfig<string>>(
	'articleDetailsComments/fetchCommentsByArticleId',
	async (articleId, thunkAPI) => {
		if (!articleId) {
			return thunkAPI.rejectWithValue('error');
		}

		try {
			const response = await thunkAPI.extra.api.get<Comment[]>('/comments', {
				params: {
					articleId,
					_expand: 'user',
				},
			});
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
