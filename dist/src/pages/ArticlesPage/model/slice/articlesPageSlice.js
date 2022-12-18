var _a;
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { ArticleView } from 'entities/Article';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/const/localStorage';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
var articlesAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var selectArticles = articlesAdapter.getSelectors(function (state) { var _a; return (_a = state.articlesPage) !== null && _a !== void 0 ? _a : articlesAdapter.getInitialState(); });
var initialState = articlesAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: (_a = localStorage.getItem(ARTICLES_VIEW_STORAGE_KEY)) !== null && _a !== void 0 ? _a : ArticleView.GRID,
    page: 1,
    hasMore: true,
    _isInit: false,
    limit: 9,
    sort: ArticleSortField.CREATED_AT,
    order: 'asc',
    search: '',
    type: ArticleType.ALL,
});
var articlesPageSlice = createSlice({
    name: 'articlesPage',
    initialState: initialState,
    reducers: {
        setView: function (state, action) {
            state.view = action.payload;
        },
        setPage: function (state, action) {
            state.page = action.payload;
        },
        initState: function (state) {
            state.limit = state.view === ArticleView.LIST ? 4 : 9;
            state._isInit = true;
        },
        setOrder: function (state, action) {
            state.order = action.payload;
        },
        setSort: function (state, action) {
            state.sort = action.payload;
        },
        setSearch: function (state, action) {
            state.search = action.payload;
        },
        setType: function (state, action) {
            state.type = action.payload;
        },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticlesList.pending, function (state, action) {
            state.error = undefined;
            state.isLoading = true;
            if (action.meta.arg.replace) {
                articlesAdapter.removeAll(state);
            }
        })
            .addCase(fetchArticlesList.fulfilled, function (state, action) {
            state.isLoading = false;
            articlesAdapter.addMany(state, action.payload);
            state.hasMore = action.payload.length > state.limit;
            if (action.meta.arg.replace) {
                articlesAdapter.setAll(state, action.payload);
            }
            else {
                articlesAdapter.addMany(state, action.payload);
            }
        })
            .addCase(fetchArticlesList.rejected, function (state, action) {
            state.isLoading = false;
            state.error = action.payload;
        });
    },
});
export var articlesPageActions = articlesPageSlice.actions, articlesPageReducer = articlesPageSlice.reducer;
//# sourceMappingURL=articlesPageSlice.js.map