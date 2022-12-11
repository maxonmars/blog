import type {PayloadAction} from '@reduxjs/toolkit';
import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import type {StateScheme} from 'app/providers/StoreProvider';
import type {Article} from 'entities/Article';
import {ArticleView} from 'entities/Article';
import type {ArticlesPageScheme} from '../types/articlesPageScheme';
import {fetchArticlesList} from '../services/fetchArticlesList';
import {ARTICLES_VIEW_STORAGE_KEY} from 'shared/const/localStorage';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: article => article.id,

});

export const selectArticles = articlesAdapter.getSelectors<StateScheme>(
	state => state.articlesPage ?? articlesAdapter.getInitialState(),
);

const initialState = articlesAdapter.getInitialState<ArticlesPageScheme>({
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	view: localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView ?? ArticleView.GRID,
});

const articlesPageSlice = createSlice({
	name: 'articlesPage',
	initialState,
	reducers: {
		setView(state, action: PayloadAction<ArticleView>) {
			state.view = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchArticlesList.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false;
				articlesAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticlesList.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const {
	actions: articlesPageActions,
	reducer: articlesPageReducer,
} = articlesPageSlice;
