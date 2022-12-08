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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import module from './ArticleDetails.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { DynamicModuleLoader } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import { useAppDispatch } from 'shared/hooks';
import { useEffect } from 'react';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import { selectArticleDetailsData, selectArticleDetailsError, selectArticleDetailsIsLoading, } from '../../model/selectors/selectArticleDetails';
import { Text, TextVariant } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Title } from 'shared/ui/Title/Title';
import { IcoThinCalendarDays, IcoThinEyeEvil } from 'shared/assets/icons/index';
import { ArticleBlockType } from '../../model/types/article';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
var reducers = {
    articleDetails: articleDetailsReducer,
};
var renderBlock = function (block) {
    switch (block.type) {
        case ArticleBlockType.CODE: {
            return _jsx(ArticleCodeBlockComponent, { block: block }, block.id);
        }
        case ArticleBlockType.IMAGE: {
            return _jsx(ArticleImageBlockComponent, { block: block }, block.id);
        }
        case ArticleBlockType.TEXT: {
            return _jsx(ArticleTextBlockComponent, { block: block }, block.id);
        }
        default: {
            return null;
        }
    }
};
export var ArticleDetails = function (_a) {
    var className = _a.className, id = _a.id;
    var t = useTranslation().t;
    var dispatch = useAppDispatch();
    var article = useSelector(selectArticleDetailsData);
    var isLoading = useSelector(selectArticleDetailsIsLoading);
    var error = useSelector(selectArticleDetailsError);
    useEffect(function () {
        if (__PROJECT__ !== 'storybook') {
            void dispatch(fetchArticleById(id));
        }
    }, [dispatch, id]);
    var content;
    if (isLoading) {
        content = (_jsxs("div", __assign({ className: module.skeletons }, { children: [_jsx(Skeleton, { width: 200, height: 200, borderRadius: '50%' }), _jsx(Skeleton, { width: 300, height: 32 }), _jsx(Skeleton, { width: 600, height: 24 }), _jsx(Skeleton, { width: "100%", height: 200 }), _jsx(Skeleton, { width: "100%", height: 200 })] })));
    }
    else if (error) {
        content = _jsx(Text, __assign({ variant: TextVariant.RED }, { children: t('Произошла ошибка при загрузке статьи.') }));
    }
    else {
        content = (_jsxs(_Fragment, { children: [_jsx(Avatar, { className: module.articleAvatar, src: article === null || article === void 0 ? void 0 : article.img, size: AvatarSize.LG }), _jsx(Title, __assign({ order: 1 }, { children: article === null || article === void 0 ? void 0 : article.title })), _jsx(Title, __assign({ order: 2 }, { children: article === null || article === void 0 ? void 0 : article.subtitle })), _jsxs("div", __assign({ className: module.articleInfos }, { children: [_jsxs("div", __assign({ className: module.infoItem }, { children: [_jsx(IcoThinEyeEvil, {}), _jsx(Text, { children: article === null || article === void 0 ? void 0 : article.views })] })), _jsxs("div", __assign({ className: module.infoItem }, { children: [_jsx(IcoThinCalendarDays, {}), _jsx(Text, { children: article === null || article === void 0 ? void 0 : article.createdAt })] }))] })), article === null || article === void 0 ? void 0 : article.blocks.map(renderBlock)] }));
    }
    return (_jsx(DynamicModuleLoader, __assign({ reducers: reducers, isRemoveAfterUnmount: true }, { children: _jsx("div", __assign({ className: classNames([module.articleDetails, className]) }, { children: content })) })));
};
//# sourceMappingURL=ArticleDetails.js.map