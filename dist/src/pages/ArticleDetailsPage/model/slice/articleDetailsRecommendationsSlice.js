import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchArticleRecommendations, } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
var recommendationsAdapter = createEntityAdapter({
    selectId: function (article) { return article.id; },
});
export var selectArticleRecommendations = recommendationsAdapter.getSelectors(function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.recommendations) !== null && _b !== void 0 ? _b : recommendationsAdapter.getInitialState(); });
var initialState = recommendationsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});
var articleDetailsRecommendationsSlice = createSlice({
    name: 'articleDetailsRecommendations',
    initialState: initialState,
    reducers: {
    // setData(state, action: PayloadAction<any>) {
    // 	state.data = action.payload;
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleRecommendations.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchArticleRecommendations.fulfilled, function (state, action) {
            state.isLoading = false;
            recommendationsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchArticleRecommendations.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export var articleDetailsRecommendationsActions = articleDetailsRecommendationsSlice.actions, articleDetailsRecommendationsReducer = articleDetailsRecommendationsSlice.reducer;
//# sourceMappingURL=articleDetailsRecommendationsSlice.js.map