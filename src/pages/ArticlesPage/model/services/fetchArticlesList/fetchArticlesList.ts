import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from '@/app/providers/StoreProvider';
import type {Article} from '@/entities/Article';
import {
	selectArticlesPageLimit,
	selectArticlesPageNumber,
	selectArticlesPageOrder,
	selectArticlesPageSearch,
	selectArticlesPageSort,
	selectArticlesPageType,
} from '../../selectors/articlesPageSelectors';
import {addQueryParams} from '@/shared/lib/url/addQueryParams/addQueryParams';
import {ArticleType} from '@/entities/Article/model/consts/article';

const checkData = (data: Article[]) => {
	if (!data) {
		throw new Error();
	}
};

interface FetchArticlesListProps {
	replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListProps, ThunkConfig<string>>(
	'articlesPage/fetchArticlesList',
	async ({replace}, thunkAPI) => {
		const sortField = selectArticlesPageSort(thunkAPI.getState());
		const sortOrder = selectArticlesPageOrder(thunkAPI.getState());
		const search = selectArticlesPageSearch(thunkAPI.getState());
		const limit = selectArticlesPageLimit(thunkAPI.getState());
		const page = selectArticlesPageNumber(thunkAPI.getState());
		const type = selectArticlesPageType(thunkAPI.getState());

		try {
			addQueryParams({
				sort: sortField,
				order: sortOrder,
				search,
				type,
			});

			const response = await thunkAPI.extra.api.get<Article[]>('/articles', {
				params: {
					_expand: 'user',
					_limit: limit,
					_page: page,
					_sort: sortField,
					_order: sortOrder,
					q: search,
					type: type === ArticleType.ALL ? undefined : type,
				},
			});
			checkData(response.data);

			return response.data;
		} catch (e: unknown) {
			return thunkAPI.rejectWithValue('error');
		}
	},
);
