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
import module from './ArticlesPageFilters.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleViewSelector } from 'features/ArticleViewSelector/ui/ArticleViewSelector';
import { articlesPageActions } from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import { ARTICLES_VIEW_STORAGE_KEY } from 'shared/const/localStorage';
import { useSelector } from 'react-redux';
import { selectArticlesPageOrder, selectArticlesPageSearch, selectArticlesPageSort, selectArticlesPageType, selectArticlesPageView, } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { useAppDispatch } from 'shared/hooks';
import { useTranslation } from 'react-i18next';
import { Card } from 'shared/ui/Card/Card';
import { Input } from 'shared/ui/Input/Input';
import { ArticleSortSelector } from 'entities/ArticleSortSelector/ArticleSortSelector';
import { fetchArticlesList } from 'pages/ArticlesPage/model/services/fetchArticlesList/fetchArticlesList';
import { useDebounce } from 'shared/hooks/useDebounce/useDebounce';
import { useCallback } from 'react';
import { ArticleTypeTabs } from 'features/ArticleTypeTabs/ArticleTypeTabs';
export var ArticlesPageFilters = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var view = useSelector(selectArticlesPageView);
    var sortField = useSelector(selectArticlesPageSort);
    var sortOrder = useSelector(selectArticlesPageOrder);
    var search = useSelector(selectArticlesPageSearch);
    var type = useSelector(selectArticlesPageType);
    var handleViewChange = function (view) {
        dispatch(articlesPageActions.setView(view));
        localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, view);
    };
    var fetchData = useCallback(function () {
        void dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);
    var debounceFetchData = useDebounce(fetchData, 500);
    var handleSortChange = function (sortField) {
        dispatch(articlesPageActions.setSort(sortField));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };
    var handleOrderChange = function (order) {
        dispatch(articlesPageActions.setOrder(order));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };
    var handleSearchChange = function (search) {
        dispatch(articlesPageActions.setSearch(search));
        dispatch(articlesPageActions.setPage(1));
        debounceFetchData();
    };
    var handleTabChange = function (value) {
        dispatch(articlesPageActions.setType(value));
        dispatch(articlesPageActions.setPage(1));
        fetchData();
    };
    return (_jsxs("div", __assign({ className: classNames([module.articlesPageFilters, className]) }, { children: [_jsx(ArticleViewSelector, { onViewChange: handleViewChange, view: view }), _jsx(ArticleSortSelector, { order: sortOrder, sort: sortField, onChangeSortField: handleSortChange, onChangeOrder: handleOrderChange }), _jsx(Card, { children: _jsx(Input, { value: search, onChange: handleSearchChange, placeholder: t('Поиск') }) }), _jsx(ArticleTypeTabs, { onTabChange: handleTabChange, selectedType: type })] })));
};
//# sourceMappingURL=ArticlesPageFilters.js.map