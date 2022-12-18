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
import module from './ArticlesPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer, selectArticles } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from 'shared/hooks';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { selectArticlesPageIsLoading, selectArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { Page } from 'widgets/Page/Page';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import { initArticlesPage } from '../../model/services/initArticlesPage/initArticlesPage';
import { ArticlesPageFilters } from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import { useSearchParams } from 'react-router-dom';
var reducers = {
    articlesPage: articlesPageReducer,
};
var ArticlesPage = function (_a) {
    var className = _a.className;
    var dispatch = useAppDispatch();
    var articles = useSelector(selectArticles.selectAll);
    var isLoading = useSelector(selectArticlesPageIsLoading);
    var view = useSelector(selectArticlesPageView);
    var searchParams = useSearchParams()[0];
    useInitialEffect(useCallback(function () {
        void dispatch(initArticlesPage(searchParams));
    }, [dispatch, searchParams]));
    var handleNextPartLoad = useCallback(function () {
        void dispatch(fetchNextArticlesPage());
    }, [dispatch]);
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers }, { children: _jsx(Page, __assign({ onScrollEnd: handleNextPartLoad }, { children: _jsxs("div", __assign({ className: classNames([module.articlesPage, className]) }, { children: [_jsx(ArticlesPageFilters, {}), _jsx(ArticleList, { articles: articles, isLoading: isLoading, view: view })] })) })) })));
};
export default ArticlesPage;
//# sourceMappingURL=ArticlesPage.js.map