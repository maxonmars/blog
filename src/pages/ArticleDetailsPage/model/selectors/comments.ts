import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';

export const selectArticleDetailsCommentsIsLoading = (state: StateScheme) => {
	return state.articleDetailsComments?.isLoading;
};

export const selectArticleDetailsCommentsError = (state: StateScheme) => {
	return state.articleDetailsComments?.error;
};
