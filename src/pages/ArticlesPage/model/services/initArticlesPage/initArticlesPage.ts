import {createAsyncThunk} from '@reduxjs/toolkit';
import type {ThunkConfig} from 'app/providers/StoreProvider';
import {articlesPageActions} from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {fetchArticlesList} from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import {selectArticlesPageIsInit} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
	'articlesPage/initArticlesPage',
	async (searchParams, thunkAPI) => {
		const {dispatch, getState} = thunkAPI;
		const isInit = selectArticlesPageIsInit(getState());
		if (!isInit) {
			Object.entries(articlesPageActions).forEach(([name, action]) => {
				const searchParamsKey = name.replace(/set/gm, '').toLowerCase();
				const searchParamsValue = searchParams.get(searchParamsKey) as never;

				if (searchParamsValue) {
					dispatch(action(searchParamsValue));
				}
			});

			dispatch(articlesPageActions.initState());
			void dispatch(fetchArticlesList({}));
		}
	},
);
