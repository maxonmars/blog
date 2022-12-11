import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import type {Article} from 'entities/Article';
import {selectArticlesPageLimit} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

const checkData = (data: Article[]) => {
	if (!data) {
		throw new Error();
	}
};

interface FetchArticlesListProps {
	page: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async ({page}, thunkAPI) => {
		const limit = selectArticlesPageLimit(thunkAPI.getState());
		try {
			const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_limit: limit,
					_page: page,
				},
			});
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
