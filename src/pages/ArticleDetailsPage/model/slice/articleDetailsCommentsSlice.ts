import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import type {ArticleDetailsCommentsSchema} from '../types/ArticleDetailsCommentsSchema';
import type {Comment} from 'entities/Comment';
import type {StateScheme} from 'app/providers/StoreProvider';
import {
	fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<Comment>({
	selectId: comment => comment.id,

});

export const selectArticleComments = commentsAdapter.getSelectors<StateScheme>(
	state => state.articleDetailsComments ?? commentsAdapter.getInitialState(),
);

const initialState = commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
});

const articleDetailsCommentsSlice = createSlice({
	name: 'articleDetailsComments',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchCommentsByArticleId.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
				state.isLoading = false;
				commentsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const {
	actions: articleDetailsCommentsActions,
	reducer: articleDetailsCommentsReducer,
} = articleDetailsCommentsSlice;
