import {combineReducers} from '@reduxjs/toolkit';
import type {ArticleDetailsPageScheme} from 'pages/ArticleDetailsPage';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import {
	articleDetailsRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageScheme>({
	comments: articleDetailsCommentsReducer,
	recommendations: articleDetailsRecommendationsReducer,
});
