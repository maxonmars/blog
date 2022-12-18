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
import module from './ArticleList.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleItem/ArticleListItem';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
var getSkeletons = function (view) {
    return new Array(view === ArticleView.LIST ? 3 : 9).fill(0).map(function (item, index) {
        return _jsx(ArticleListItemSkeleton, { view: view }, index);
    });
};
export var ArticleList = function (_a) {
    var className = _a.className, target = _a.target, articles = _a.articles, isLoading = _a.isLoading, _b = _a.view, view = _b === void 0 ? ArticleView.GRID : _b;
    var t = useTranslation().t;
    var renderArticle = function (article) {
        return _jsx(ArticleListItem, { target: target, article: article, view: view }, article.id);
    };
    if (!isLoading && !articles.length) {
        return (_jsx("div", { children: _jsx(Text, __assign({ size: TextSize.LG }, { children: t('Статьи не найдены') })) }));
    }
    return (_jsxs("div", __assign({ className: classNames([module.articleList, className, module[view]]) }, { children: [articles.length > 0
                ? articles.map(renderArticle)
                : null, isLoading && getSkeletons(view)] })));
};
//# sourceMappingURL=ArticleList.js.map