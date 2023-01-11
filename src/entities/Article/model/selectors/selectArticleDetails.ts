import type {StateScheme} from '@/app/providers/StoreProvider/config/StateScheme';

export const selectArticleDetailsData = (state: StateScheme) => {
	return state.articleDetails?.data;
};

export const selectArticleDetailsIsLoading = (state: StateScheme) => {
	return state.articleDetails?.isLoading;
};

export const selectArticleDetailsError = (state: StateScheme) => {
	return state.articleDetails?.error;
};
