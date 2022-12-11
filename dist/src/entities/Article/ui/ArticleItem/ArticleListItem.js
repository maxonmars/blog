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
import { Text } from 'shared/ui/Text/Text';
import { IcoThinEyeEvil } from 'shared/assets/icons';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button } from 'shared/ui/Button/Button';
export var ArticleListItem = function (_a) {
    var className = _a.className, article = _a.article, view = _a.view;
    if (view === ArticleView.LIST) {
        return (_jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view]]) }, { children: [_jsxs("div", __assign({ className: module.userInfo }, { children: [_jsx(Avatar, {}), _jsx(Text, { children: "Ulbi" })] })), _jsx(Text, __assign({ className: module.coverDate }, { children: article.createdAt })), _jsx(Text, __assign({ className: module.articleTypes }, { children: article.type.join(', ') })), _jsx("img", { className: module.coverImage, src: "https://teknotower.com/wp-content/uploads/2020/11/js.png", width: 200, height: 200, alt: article.title }), _jsx(Text, __assign({ className: module.subtitle }, { children: article.subtitle })), _jsx(Button, __assign({ className: module.readBtn }, { children: "\u0447\u0438\u0442\u0430\u0442\u044C \u0434\u0430\u043B\u0435\u0435" })), _jsxs("div", __assign({ className: module.viewsCounter }, { children: [_jsx(Text, { children: article.views }), _jsx(IcoThinEyeEvil, { width: 20 })] }))] })));
    }
    return (_jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view]]) }, { children: [_jsxs("div", __assign({ className: module.cover }, { children: [_jsx("img", { src: "https://teknotower.com/wp-content/uploads/2020/11/js.png", width: 200, height: 200, alt: article.title }), _jsx(Text, __assign({ className: module.coverDate }, { children: article.createdAt }))] })), _jsx(Text, __assign({ className: module.articleTypes }, { children: article.type.join(', ') })), _jsxs("div", __assign({ className: module.viewsCounter }, { children: [_jsx(Text, { children: article.views }), _jsx(IcoThinEyeEvil, { width: 20 })] })), _jsx(Text, __assign({ className: module.articleTitle }, { children: article.title }))] })));
};
//# sourceMappingURL=ArticleListItem.js.map