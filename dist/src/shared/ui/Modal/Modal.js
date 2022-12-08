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
import module from './Modal.module.css';
import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { Portal } from 'shared/ui/Portal/Portal';
import { Overlay } from 'shared/ui/Overlay/Overlay';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { IcoThinXmark } from 'shared/assets/icons';
import { Title } from 'shared/ui/Title/Title';
var overlayAnimation = {
    appearActive: module.overlayAppearActive,
    exitActive: module.overlayExitActive,
};
var contentAnimation = {
    appear: module.contentAppear,
    appearActive: module.contentAppearActive,
    exit: module.contentExit,
    exitActive: module.contentExitActive,
};
var ANIMATION_TIME = 1000;
export var Modal = function (_a) {
    var isOpened = _a.isOpened, children = _a.children, onClose = _a.onClose, title = _a.title, titleOrder = _a.titleOrder;
    var _b = useState(false), isClose = _b[0], setIsClose = _b[1];
    useEffect(function () {
        var handleKeyDown = function (e) {
            if (e.key === 'Escape') {
                setIsClose(true);
            }
        };
        document.addEventListener('keydown', handleKeyDown);
        return function () {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);
    if (!isOpened) {
        return null;
    }
    var handleClose = function () {
        setIsClose(true);
    };
    var handleExited = function () {
        onClose();
        setIsClose(false);
    };
    return (_jsx(Portal, { children: _jsxs("div", __assign({ className: module.portalLayer }, { children: [_jsx(CSSTransition, __assign({ appear: true, in: !isClose, timeout: ANIMATION_TIME, classNames: overlayAnimation }, { children: _jsx(Overlay, { onClose: handleClose }) })), _jsx(CSSTransition, __assign({ appear: true, in: !isClose, timeout: ANIMATION_TIME, classNames: contentAnimation, onExited: handleExited }, { children: _jsxs("div", __assign({ className: module.modal }, { children: [_jsxs("div", __assign({ className: module.header }, { children: [_jsx(Title, __assign({ order: titleOrder }, { children: title })), _jsx(Button, __assign({ onClick: handleClose, variant: ButtonVariant.SUBTLE, size: ButtonSize.SM, square: true }, { children: _jsx(IcoThinXmark, {}) }))] })), typeof children === 'function'
                                ? children(handleClose)
                                : children] })) }))] })) }));
};
//# sourceMappingURL=Modal.js.map