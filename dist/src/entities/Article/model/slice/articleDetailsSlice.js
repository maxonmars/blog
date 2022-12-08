import { createSlice } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
var initialState = {
    isLoading: false,
};
var articleDetailsSlice = createSlice({
    name: 'articleDetails',
    initialState: initialState,
    reducers: {
    // setData(state, action: PayloadAction<any>) {
    // 	state.data = action.payload;
    // },
    },
    extraReducers: function (builder) {
        builder
            .addCase(fetchArticleById.pending, function (state) {
            state.error = undefined;
            state.isLoading = true;
        }).addCase(fetchArticleById.fulfilled, function (state, action) {
            state.data = action.payload;
            state.isLoading = false;
        }).addCase(fetchArticleById.rejected, function (state, action) {
            state.error = action.payload;
            state.isLoading = false;
        });
    },
});
export var articleDetailsActions = articleDetailsSlice.actions, articleDetailsReducer = articleDetailsSlice.reducer;
//# sourceMappingURL=articleDetailsSlice.js.map