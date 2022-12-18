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
import module from './ArticleListItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleView } from '../../model/types/article';
import { Card } from 'shared/ui/Card/Card';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
export var ArticleListItemSkeleton = function (_a) {
    var className = _a.className, view = _a.view;
    // TODO: взять для текстовых скелетонов высоту шрифта
    if (view === ArticleView.LIST) {
        return (_jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view]]) }, { children: [_jsxs("div", __assign({ className: module.userInfo }, { children: [_jsx(Skeleton, { height: 50, width: 50, borderRadius: "50%" }), _jsx(Skeleton, { height: 16, width: 150 })] })), _jsx(Skeleton, { className: module.coverDate, height: 16, width: 100 }), _jsx(Skeleton, { className: module.articleTitle, height: 24, width: 220 }), _jsx(Skeleton, { className: module.articleTypes, height: 16, width: 220 }), _jsx(Skeleton, { className: module.coverImage, height: 200, width: "100%" }), _jsx(Skeleton, { className: module.coverImage, height: 100, width: "100%" }), _jsx(Skeleton, { className: module.readBtn, height: 36, width: 128, borderRadius: "8px" }), _jsxs("div", __assign({ className: module.viewsCounter }, { children: [_jsx(Skeleton, { height: 20, width: 64 }), _jsx(Skeleton, { height: 20, width: 20 })] }))] })));
    }
    return (_jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view], module.skeleton]) }, { children: [_jsx(Skeleton, { className: module.cover, height: 200, width: "100%" }), _jsx(Skeleton, { className: module.articleTypes, height: 16, width: 96 }), _jsx(Skeleton, { className: module.viewsCounter, height: 16, width: 64 }), _jsx(Skeleton, { className: module.articleTitle, height: 24, width: "100%" })] })));
};
//# sourceMappingURL=ArticleListItemSkeleton.js.map