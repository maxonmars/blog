import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Article} from 'entities/Article';

const checkData = (data: Article[]) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
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
