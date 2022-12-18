import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsCommentsReducer } from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer, } from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';
export var articleDetailsPageReducer = combineReducers({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
//# sourceMappingURL=index.js.map