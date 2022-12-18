var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import module from './ArticleDetailsPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { selectArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { selectArticleDetailsError } from 'entities/Article/model/selectors/selectArticleDetails';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks';
import { useCallback } from 'react';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetails, ArticleList } from 'entities/Article';
import { AddCommentForm } from 'features/addCommentForm';
import { sendComment } from '../../model/services/sendComment/sendComment';
import { selectArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { ROUTE_PATH } from 'app/providers/router';
import { selectArticleRecommendations, } from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';
import { selectArticleDetailsRecommendationsError, selectArticleDetailsRecommendationsIsLoading, } from 'pages/ArticleDetailsPage/model/selectors/recommendations';
import { fetchArticleRecommendations, } from 'pages/ArticleDetailsPage/model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import { Title } from 'shared/ui/Title/Title';
import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
var reducers = {
    articleDetailsPage: articleDetailsPageReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetailsPage').t;
    var dispatch = useAppDispatch();
    var navigate = useNavigate();
    var id = useParams().id;
    var isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
    var error = useSelector(selectArticleDetailsError);
    var comments = useSelector(selectArticleComments.selectAll);
    var recommendations = useSelector(selectArticleRecommendations.selectAll);
    var isLoadingRecommendations = useSelector(selectArticleDetailsRecommendationsIsLoading);
    var errorRecommendations = useSelector(selectArticleDetailsRecommendationsError);
    useInitialEffect(useCallback(function () {
        void dispatch(fetchCommentsByArticleId(id));
        void dispatch(fetchArticleRecommendations());
    }, [dispatch, id]));
    var handleCommentSend = useCallback(function (text) {
        void dispatch(sendComment(text));
    }, [dispatch]);
    var handleArticleListBack = useCallback(function () {
        navigate(ROUTE_PATH.ARTICLES);
    }, [navigate]);
    if (!id) {
        return (_jsx("div", __assign({ className: classNames([module.articleDetailsPage, className]) }, { children: t('Статья не найдена') })));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, isRemoveAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames([module.articleDetailsPage, className]) }, { children: [_jsx(Button, __assign({ onClick: handleArticleListBack, variant: ButtonVariant.OUTLINE }, { children: t('Назад к списку') })), _jsx(ArticleDetails, { id: id }), _jsx(Title, __assign({ order: 3 }, { children: t('Рекомендуем') })), _jsx(ArticleList, { articles: recommendations, target: "_blank", isLoading: isLoadingRecommendations }), _jsx(Title, __assign({ order: 3 }, { children: t('Комментарии') })), _jsx(AddCommentForm, { onCommentSend: handleCommentSend }), _jsx(CommentList, { isLoading: isLoading, comments: comments })] })) })));
};
export default ArticleDetailsPage;
//# sourceMappingURL=ArticleDetailsPage.js.map