import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { fetchCommentsByArticleId } from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
var commentsAdapter = createEntityAdapter({
    selectId: function (comment) { return comment.id; },
});
export var selectArticleComments = commentsAdapter.getSelectors(function (state) { var _a, _b; return (_b = (_a = state.articleDetailsPage) === null || _a === void 0 ? void 0 : _a.comments) !== null && _b !== void 0 ? _b : commentsAdapter.getInitialState(); });
var initialState = commentsAdapter.getInitialState({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
});
var articleDetailsCommentsSlice = createSlice({
    name: 'articleDetailsComments',
    initialState: initialState,
    reducers: {},
    extraReducers: function (builder) {
        builder
            .addCase(fetchCommentsByArticleId.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        })
            .addCase(fetchCommentsByArticleId.fulfilled, function (state, action) {
            state.isLoading = false;
            commentsAdapter.setAll(state, action.payload);
        })
            .addCase(fetchCommentsByArticleId.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export var articleDetailsCommentsActions = articleDetailsCommentsSlice.actions, articleDetailsCommentsReducer = articleDetailsCommentsSlice.reducer;
//# sourceMappingURL=articleDetailsCommentsSlice.js.map