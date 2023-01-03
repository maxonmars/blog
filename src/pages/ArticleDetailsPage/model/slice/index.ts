import {combineReducers} from '@reduxjs/toolkit';
import type {ArticleDetailsPageScheme} from '../types';
import {articleDetailsCommentsReducer} from './articleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
	comments: articleDetailsCommentsReducer,
});
