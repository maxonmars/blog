import type {StateScheme} from '@/app/providers/StoreProvider';
import type {Article} from '@/entities/Article';
import {ArticleSortField, ArticleType, ArticleView} from '@/entities/Article';
import {ARTICLES_VIEW_STORAGE_KEY} from '@/shared/const/localStorage';
import type {SortOrder} from '@/shared/types';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import {fetchArticlesList} from '../services/fetchArticlesList/fetchArticlesList';
import type {ArticlesPageScheme} from '../types/articlesPageScheme';

const articlesAdapter = createEntityAdapter<Article>({
	selectId: article => article.id,

});

export const selectArticles = articlesAdapter.getSelectors<StateScheme>(
	state => state.articleListPage?.pages ?? articlesAdapter.getInitialState(),
);

const initialState = articlesAdapter.getInitialState<ArticlesPageScheme>({
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
	view: localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY) as ArticleView ?? ArticleView.GRID,
	page: 1,
	limit: 9,
	hasMore: true,
	_isInit: false,
	sort: ArticleSortField.CREATED_AT,
	order: 'asc',
	search: '',
	type: ArticleType.ALL,
});

const articlesPageSlice = createSlice({
	name: 'articlesPage',
	initialState,
	reducers: {
		setView(state, action: PayloadAction<ArticleView>) {
			state.view = action.payload;
		},
		setPage(state, action: PayloadAction<number>) {
			state.page = action.payload;
		},
		initState(state) {
			state.limit = state.view === ArticleView.LIST ? 4 : 9;
			state._isInit = true;
		},
		setOrder(state, action: PayloadAction<SortOrder>) {
			state.order = action.payload;
		},
		setSort(state, action: PayloadAction<ArticleSortField>) {
			state.sort = action.payload;
		},
		setSearch(state, action: PayloadAction<string>) {
			state.search = action.payload;
		},
		setType(state, action: PayloadAction<ArticleType>) {
			state.type = action.payload;
		},
	},
	extraReducers(builder) {
		builder
			.addCase(fetchArticlesList.pending, (state, action) => {
				state.error = undefined;
				state.isLoading = true;

				if (action.meta.arg.replace) {
					articlesAdapter.removeAll(state);
				}
			})
			.addCase(fetchArticlesList.fulfilled, (state, action) => {
				state.isLoading = false;
				articlesAdapter.addMany(state, action.payload);
				state.hasMore = action.payload.length >= state.limit;

				if (action.meta.arg.replace) {
					articlesAdapter.setAll(state, action.payload);
				} else {
					articlesAdapter.addMany(state, action.payload);
				}
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
