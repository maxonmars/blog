import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectArticleDetailsRecommendationsIsLoading = (state: StateScheme) => {
	return state.articleDetailsPage?.recommendations?.isLoading;
};

export const selectArticleDetailsRecommendationsError = (state: StateScheme) => {
	return state.articleDetailsPage?.recommendations?.error;
};
