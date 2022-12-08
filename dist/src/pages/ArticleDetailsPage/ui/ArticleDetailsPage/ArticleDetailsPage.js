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
import { useParams } from 'react-router-dom';
import { Text } from 'shared/ui/Text/Text';
import { CommentList } from 'entities/Comment';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsCommentsReducer, selectArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import { useSelector } from 'react-redux';
import { selectArticleDetailsError } from 'entities/Article/model/selectors/selectArticleDetails';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/hooks';
import { useCallback } from 'react';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { ArticleDetails } from 'entities/Article';
import { AddCommentForm } from 'features/addCommentForm';
import { sendComment } from '../../model/services/sendComment/sendComment';
import { selectArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
var reducers = {
    articleDetailsComments: articleDetailsCommentsReducer,
};
var ArticleDetailsPage = function (_a) {
    var className = _a.className;
    var t = useTranslation('articleDetailsPage').t;
    var dispatch = useAppDispatch();
    var id = useParams().id;
    var isLoading = useSelector(selectArticleDetailsCommentsIsLoading);
    var error = useSelector(selectArticleDetailsError);
    var comments = useSelector(selectArticleComments.selectAll);
    useInitialEffect(useCallback(function () {
        void dispatch(fetchCommentsByArticleId(id));
    }, [dispatch, id]));
    var handleCommentSend = useCallback(function (text) {
        void dispatch(sendComment(text));
    }, [dispatch]);
    if (!id) {
        return (_jsx("div", __assign({ className: classNames([module.articleDetailsPage, className]) }, { children: t('Статья не найдена') })));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, isRemoveAfterUnmount: true }, { children: _jsxs("div", __assign({ className: classNames([module.articleDetailsPage, className]) }, { children: [_jsx(ArticleDetails, { id: id }), _jsx(Text, { children: t('Комментарии') }), _jsx(AddCommentForm, { onCommentSend: handleCommentSend }), _jsx(CommentList, { isLoading: isLoading, comments: comments })] })) })));
};
export default ArticleDetailsPage;
//# sourceMappingURL=ArticleDetailsPage.js.map