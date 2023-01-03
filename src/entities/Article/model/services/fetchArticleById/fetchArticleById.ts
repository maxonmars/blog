import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Article} from '../../types/article';

const checkData = (data: Article) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchArticleById = createAsyncThunk<Article, string | undefined, ThunkConfig<string>>(
	'articleDetails/fetchArticleById',
	async (articleId, thunkAPI) => {
		try {
			if (!articleId) {
				throw new Error('not article id');
			}

			const response = await thunkAPI.extra.api.get<Article>(`/articles/${articleId}`, {
				params: {
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
