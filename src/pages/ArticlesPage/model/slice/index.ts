import {combineReducers} from '@reduxjs/toolkit';
import type {ArticleListPageScheme} from '../types';
import {articlesPageReducer} from './articlesPageSlice';
import {articleVirtualizedListReducer} from './articleVirtualizedListSlice';

export const articleListPageReducer = combineReducers<ArticleListPageScheme>({
	pages: articlesPageReducer,
	virtualizedList: articleVirtualizedListReducer,
});
