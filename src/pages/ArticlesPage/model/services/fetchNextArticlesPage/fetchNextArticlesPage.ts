import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import {
	selectArticlesPageHasMore,
	selectArticlesPageIsLoading,
	selectArticlesPageNumber,
} from '../../selectors/articlesPageSelectors';
import {articlesPageActions} from '../../slice/articlesPageSlice';
import {fetchArticlesList} from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/fetchNextArticlesPage',
	async (_, thunkAPI) => {
		const {getState, dispatch} = thunkAPI;
		const hasMore = selectArticlesPageHasMore(getState());
		const page = selectArticlesPageNumber(getState());
		const isLoading = selectArticlesPageIsLoading(getState());

		if (hasMore && !isLoading) {
			dispatch(articlesPageActions.setPage(page + 1));
			void dispatch(fetchArticlesList({}));
		}
	},
);
