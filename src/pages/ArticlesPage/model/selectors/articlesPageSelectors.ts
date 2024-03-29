import type {StateScheme} from '@/app/providers/StoreProvider';
import {ArticleSortField, ArticleType, ArticleView} from '@/entities/Article';

export const selectArticlesPageIsLoading = (state: StateScheme) => {
	return state.articleListPage?.pages?.isLoading;
};

export const selectArticlesPageError = (state: StateScheme) => {
	return state.articleListPage?.pages?.error;
};

export const selectArticlesPageView = (state: StateScheme) => {
	return state.articleListPage?.pages?.view ?? ArticleView.LIST;
};

export const selectArticlesPageNumber = (state: StateScheme) => {
	return state.articleListPage?.pages?.page ?? 1;
};

export const selectArticlesPageLimit = (state: StateScheme) => {
	return state.articleListPage?.pages?.limit;
};

export const selectArticlesPageHasMore = (state: StateScheme) => {
	return state.articleListPage?.pages?.hasMore;
};

export const selectArticlesPageIsInit = (state: StateScheme) => {
	return state.articleListPage?.pages?._isInit;
};

export const selectArticlesPageOrder = (state: StateScheme) => {
	return state.articleListPage?.pages?.order ?? 'asc';
};

export const selectArticlesPageSort = (state: StateScheme) => {
	return state.articleListPage?.pages?.sort ?? ArticleSortField.CREATED_AT;
};

export const selectArticlesPageSearch = (state: StateScheme) => {
	return state.articleListPage?.pages?.search ?? '';
};

export const selectArticlesPageType = (state: StateScheme) => {
	return state.articleListPage?.pages?.type ?? ArticleType.ALL;
};
