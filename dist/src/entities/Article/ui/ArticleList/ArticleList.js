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
import { jsx as _jsx } from "react/jsx-runtime";
import module from './ArticleList.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleItem/ArticleListItem';
export var ArticleList = function (_a) {
    var className = _a.className, articles = _a.articles, isLoading = _a.isLoading, _b = _a.view, view = _b === void 0 ? ArticleView.LIST : _b;
    var renderArticle = function (article) {
        return _jsx(ArticleListItem, { article: article, view: view });
    };
    return (_jsx("div", __assign({ className: classNames([module.articleList, className, module[view]]) }, { children: articles.length > 0
            ? articles.map(renderArticle)
            : null })));
};
//# sourceMappingURL=ArticleList.js.map