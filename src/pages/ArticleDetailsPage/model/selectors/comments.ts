import type {StateScheme} from '@/app/providers/StoreProvider/config/StateScheme';

export const selectArticleDetailsCommentsIsLoading = (state: StateScheme) => {
	return state.articleDetailsPage?.comments?.isLoading;
};

export const selectArticleDetailsCommentsError = (state: StateScheme) => {
	return state.articleDetailsPage?.comments?.error;
};
