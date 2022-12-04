import {createSlice} from '@reduxjs/toolkit';
import type {ArticleDetailsScheme} from '../types/articleDetailsScheme';
import {fetchArticleById} from '../services/fetchArticleById/fetchArticleById';

const initialState: ArticleDetailsScheme = {
	isLoading: false,
};

const articleDetailsSlice = createSlice({
	name: 'articleDetails',
	initialState,
	reducers: {
		// setData(state, action: PayloadAction<any>) {
		// 	state.data = action.payload;
		// },
	},
	extraReducers(builder) {
		builder
			.addCase(fetchArticleById.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			}).addCase(fetchArticleById.fulfilled, (state, action) => {
				state.data = action.payload;
				state.isLoading = false;
			}).addCase(fetchArticleById.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const {
	actions: articleDetailsActions,
	reducer: articleDetailsReducer,
} = articleDetailsSlice;
