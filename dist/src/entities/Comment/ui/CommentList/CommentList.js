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
import module from './CommentList.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
export var CommentList = function (_a) {
    var className = _a.className, comments = _a.comments, isLoading = _a.isLoading;
    var t = useTranslation().t;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames([module.commentList, className]) }, { children: [_jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true }), _jsx(CommentCard, { isLoading: true })] })));
    }
    return (_jsx("div", __assign({ className: classNames([module.commentList, className]) }, { children: (comments === null || comments === void 0 ? void 0 : comments.length)
            ? comments.map(function (comment) {
                return _jsx(CommentCard, { isLoading: isLoading, comment: comment }, comment.id);
            })
            : _jsx(Text, { children: t('Комментарии отсутствуют') }) })));
};
//# sourceMappingURL=CommentList.js.map