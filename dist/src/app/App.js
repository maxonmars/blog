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
import './styles/index.css';
import { Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { AppRouter } from 'app/providers/router';
import { Sidebar } from 'widgets/Sidebar';
import { PageLoader } from 'widgets/PageLoader';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User';
import { selectUserIsInit } from 'entities/User/model/selectors/selectUserIsInit';
export var App = function () {
    var dispatch = useDispatch();
    var isInit = useSelector(selectUserIsInit);
    useEffect(function () {
        dispatch(userActions.initAuthData());
    }, [dispatch]);
    return (_jsx("div", __assign({ className: classNames(['app', 'app-layout']) }, { children: _jsxs(Suspense, __assign({ fallback: _jsx(PageLoader, { className: "app-suspense-loader" }) }, { children: [_jsx(Navbar, {}), _jsx(Sidebar, {}), isInit && _jsx(AppRouter, {})] })) })));
};
//# sourceMappingURL=App.js.map