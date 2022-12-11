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
import module from './CommentCard.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar, AvatarSize } from 'shared/ui/Avatar/Avatar';
import { Title } from 'shared/ui/Title/Title';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ROUTE_PATH } from 'app/providers/router';
export var CommentCard = function (_a) {
    var className = _a.className, comment = _a.comment, isLoading = _a.isLoading;
    if (isLoading) {
        return (_jsxs("div", __assign({ className: classNames([module.commentCard, className]) }, { children: [_jsx(Skeleton, { borderRadius: '50%', width: 50, height: 50 }), _jsx(Skeleton, { width: 150, height: 20 }), _jsx(Skeleton, { className: module.commentText, width: '100%', height: 16 })] })));
    }
    if (!comment) {
        return null;
    }
    var profileLink = "".concat(ROUTE_PATH.PROFILE).concat(comment.user.id);
    return (_jsxs("div", __assign({ className: classNames([module.commentCard, className]) }, { children: [_jsx(AppLink, __assign({ to: profileLink }, { children: _jsx(Avatar, { alt: "\u0430\u0432\u0430\u0442\u0430\u0440 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F", loading: "lazy", decoding: "async", src: comment.user.avatar, size: AvatarSize.SM }) })), _jsx(AppLink, __assign({ to: profileLink }, { children: _jsx(Title, __assign({ order: 4 }, { children: comment.user.username })) })), _jsx(Text, __assign({ className: module.commentText }, { children: comment.text }))] })));
};
//# sourceMappingURL=CommentCard.js.map