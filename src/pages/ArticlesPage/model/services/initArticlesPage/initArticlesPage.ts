import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import {articlesPageActions} from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {fetchArticlesList} from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import {selectArticlesPageIsInit} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
	'articlesPage/initArticlesPage',
	async (_, thunkAPI) => {
		const {dispatch, getState} = thunkAPI;
		const isInit = selectArticlesPageIsInit(getState());
		if (!isInit) {
			dispatch(articlesPageActions.initState());
			void dispatch(fetchArticlesList({page: 1}));
		}
	},
);
