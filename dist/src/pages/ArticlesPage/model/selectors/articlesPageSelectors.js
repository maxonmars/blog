import { ArticleView } from 'entities/Article';
import { ArticleSortField, ArticleType } from 'entities/Article/model/types/article';
export var selectArticlesPageIsLoading = function (state) {
    var _a;
    return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.isLoading;
};
export var selectArticlesPageError = function (state) {
    var _a;
    return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.error;
};
export var selectArticlesPageView = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.view) !== null && _b !== void 0 ? _b : ArticleView.GRID;
};
export var selectArticlesPageNumber = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.page) !== null && _b !== void 0 ? _b : 1;
};
export var selectArticlesPageLimit = function (state) {
    var _a;
    return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.limit;
};
export var selectArticlesPageHasMore = function (state) {
    var _a;
    return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.hasMore;
};
export var selectArticlesPageIsInit = function (state) {
    var _a;
    return (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a._isInit;
};
export var selectArticlesPageOrder = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.order) !== null && _b !== void 0 ? _b : 'asc';
};
export var selectArticlesPageSort = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.sort) !== null && _b !== void 0 ? _b : ArticleSortField.CREATED_AT;
};
export var selectArticlesPageSearch = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.search) !== null && _b !== void 0 ? _b : '';
};
export var selectArticlesPageType = function (state) {
    var _a, _b;
    return (_b = (_a = state.articlesPage) === null || _a === void 0 ? void 0 : _a.type) !== null && _b !== void 0 ? _b : ArticleType.ALL;
};
//# sourceMappingURL=articlesPageSelectors.js.map