import {combineReducers} from '@reduxjs/toolkit';
import type {ArticleDetailsPageScheme} from '../types';
import {articleDetailsCommentsReducer} from './articleDetailsCommentsSlice';
import {
	articleDetailsRecommendationsReducer,
} from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsRecommendationsReducer,
});
