import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Article} from 'entities/Article';

const checkData = (data: Article[]) => {
	if (!data) {
		throw new Error();
	}
};

export const fetchArticleRecommendations = createAsyncThunk<Article[], void, ThunkConfig<string>>(
	'articleDetailsRecommendations/fetchArticleRecommendations',
	async (_, thunkAPI) => {
		try {
			const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
				params: {
					_limit: 4,
				},
			});
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
