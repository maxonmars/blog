import {createEntityAdapter, createSlice} from '@reduxjs/toolkit';
import type {
	ArticleDetailsRecommendationsScheme,
} from '../types/ArticleDetailsRecommendationsScheme';
import type {StateScheme} from 'app/providers/StoreProvider';
import type {Article} from 'entities/Article';
import {
	fetchArticleRecommendations,
} from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article>({
	selectId: article => article.id,

});

export const selectArticleRecommendations = recommendationsAdapter.getSelectors<StateScheme>(
	state => state.articleDetailsPage?.recommendations ?? recommendationsAdapter.getInitialState(),
);

const initialState = recommendationsAdapter.getInitialState<ArticleDetailsRecommendationsScheme>({
	isLoading: false,
	error: undefined,
	ids: [],
	entities: {},
});

const articleDetailsRecommendationsSlice = createSlice({
	name: 'articleDetailsRecommendations',
	initialState,
	reducers: {
		// setData(state, action: PayloadAction<any>) {
		// 	state.data = action.payload;
	},
	extraReducers(builder) {
		builder
			.addCase(fetchArticleRecommendations.pending, state => {
				state.error = undefined;
				state.isLoading = true;
			})
			.addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
				state.isLoading = false;
				recommendationsAdapter.setAll(state, action.payload);
			})
			.addCase(fetchArticleRecommendations.rejected, (state, action) => {
				state.error = action.payload;
				state.isLoading = false;
			});
	},
});

export const {
	actions: articleDetailsRecommendationsActions,
	reducer: articleDetailsRecommendationsReducer,
} = articleDetailsRecommendationsSlice;
