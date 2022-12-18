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
import module from './Page.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback, useRef } from 'react';
import { useInfinityScroll } from 'shared/hooks/useInfinityScroll/useInfinityScroll';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { restorationScrollActions, selectRestorationScrollByPath } from 'features/RestorationScroll';
import { useLocation } from 'react-router-dom';
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect';
import { useThrottle } from 'shared/hooks/useThrottle/useThrottle';
export var Page = function (_a) {
    var className = _a.className, children = _a.children, onScrollEnd = _a.onScrollEnd;
    var dispatch = useAppDispatch();
    var wrapperRef = useRef();
    var triggerRef = useRef();
    var pathname = useLocation().pathname;
    var scrollPosition = useAppSelector(function (state) { return selectRestorationScrollByPath(state, pathname); });
    useInitialEffect(useCallback(function () {
        wrapperRef.current.scrollTop = scrollPosition;
    }, [scrollPosition]));
    useInfinityScroll({ wrapperRef: wrapperRef, triggerRef: triggerRef, callback: onScrollEnd });
    var handleScroll = useThrottle(function (e) {
        dispatch(restorationScrollActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);
    return (_jsxs("div", __assign({ ref: wrapperRef, className: classNames([module.page, className]), onScroll: handleScroll }, { children: [children, onScrollEnd ? _jsx("div", { className: module.trigger, ref: triggerRef }) : null] })));
};
//# sourceMappingURL=Page.js.map