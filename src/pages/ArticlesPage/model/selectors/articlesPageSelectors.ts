import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {ArticleView} from 'entities/Article';
import {ArticleSortField, ArticleType} from 'entities/Article/model/types/article';

export const selectArticlesPageIsLoading = (state: StateScheme) => {
	return state.articlesPage?.isLoading;
};

export const selectArticlesPageError = (state: StateScheme) => {
	return state.articlesPage?.error;
};

export const selectArticlesPageView = (state: StateScheme) => {
	return state.articlesPage?.view ?? ArticleView.GRID;
};

export const selectArticlesPageNumber = (state: StateScheme) => {
	return state.articlesPage?.page ?? 1;
};

export const selectArticlesPageLimit = (state: StateScheme) => {
	return state.articlesPage?.limit;
};

export const selectArticlesPageHasMore = (state: StateScheme) => {
	return state.articlesPage?.hasMore;
};

export const selectArticlesPageIsInit = (state: StateScheme) => {
	return state.articlesPage?._isInit;
};

export const selectArticlesPageOrder = (state: StateScheme) => {
	return state.articlesPage?.order ?? 'asc';
};

export const selectArticlesPageSort = (state: StateScheme) => {
	return state.articlesPage?.sort ?? ArticleSortField.CREATED_AT;
};

export const selectArticlesPageSearch = (state: StateScheme) => {
	return state.articlesPage?.search ?? '';
};

export const selectArticlesPageType = (state: StateScheme) => {
	return state.articlesPage?.type ?? ArticleType.ALL;
};
