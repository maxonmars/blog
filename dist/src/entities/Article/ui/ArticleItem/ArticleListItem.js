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
import { ArticleBlockType, ArticleView } from '../../model/types/article';
import { Text } from 'shared/ui/Text/Text';
import { IcoThinEyeEvil } from 'shared/assets/icons';
import { Card } from 'shared/ui/Card/Card';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Button, ButtonVariant } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Title } from 'shared/ui/Title/Title';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { useNavigate } from 'react-router-dom';
import { ROUTE_PATH } from 'app/providers/router';
import { AppLink } from 'shared/ui/AppLink/AppLink';
export var ArticleListItem = function (_a) {
    var className = _a.className, article = _a.article, view = _a.view, target = _a.target;
    var t = useTranslation().t;
    var navigate = useNavigate();
    var handleArticleDetailsNavigate = function () {
        navigate("".concat(ROUTE_PATH.ARTICLE_DETAILS).concat(article.id));
    };
    if (view === ArticleView.LIST) {
        var textBlock = article.blocks.find(function (block) { return block.type === ArticleBlockType.TEXT; });
        return (_jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view]]) }, { children: [_jsxs("div", __assign({ className: module.userInfo }, { children: [_jsx(Avatar, { src: article.user.avatar }), _jsx(Text, { children: article.user.username })] })), _jsx(Text, __assign({ className: module.coverDate }, { children: article.createdAt })), _jsx(Title, __assign({ order: 2, className: module.articleTitle }, { children: article.title })), _jsx(Text, __assign({ className: module.articleTypes }, { children: article.type.join(', ') })), _jsx("img", { className: module.coverImage, height: 250, src: article.img, alt: article.title }), textBlock
                    && _jsx(ArticleTextBlockComponent, { block: textBlock, className: module.textBlock }), _jsx(AppLink, __assign({ to: "".concat(ROUTE_PATH.ARTICLE_DETAILS).concat(article.id) }, { children: _jsx(Button, __assign({ variant: ButtonVariant.OUTLINE, className: module.readBtn }, { children: t('Читать далее...') })) })), _jsxs("div", __assign({ className: module.viewsCounter }, { children: [_jsx(Text, { children: article.views }), _jsx(IcoThinEyeEvil, { width: 20 })] }))] })));
    }
    return (_jsx(AppLink, __assign({ target: target, to: "".concat(ROUTE_PATH.ARTICLE_DETAILS).concat(article.id), className: module.appLinkCardWrapper }, { children: _jsxs(Card, __assign({ className: classNames([module.articleListItem, className, module[view]]), onClick: handleArticleDetailsNavigate }, { children: [_jsxs("div", __assign({ className: module.cover }, { children: [_jsx("img", { className: module.coverImage, src: article.img, width: 200, height: 200, alt: article.title }), _jsx(Text, __assign({ className: module.coverDate }, { children: article.createdAt }))] })), _jsx(Text, __assign({ className: module.articleTypes }, { children: article.type.join(', ') })), _jsxs("div", __assign({ className: module.viewsCounter }, { children: [_jsx(Text, { children: article.views }), _jsx(IcoThinEyeEvil, { width: 20 })] })), _jsx(Title, __assign({ order: 3, className: module.articleTitle }, { children: article.title }))] })) })));
};
//# sourceMappingURL=ArticleListItem.js.map