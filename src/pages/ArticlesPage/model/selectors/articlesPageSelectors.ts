import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {ArticleView} from 'entities/Article';

export const selectArticlesPageIsLoading = (state: StateScheme) => {
	return state.articlesPage?.isLoading;
};

export const selectArticlesPageError = (state: StateScheme) => {
	return state.articlesPage?.error;
};

export const selectArticlesPageView = (state: StateScheme) => {
	return state.articlesPage?.view ?? ArticleView.GRID;
};
