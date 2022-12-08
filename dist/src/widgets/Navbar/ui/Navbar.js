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
import { useState } from 'react';
import module from './Navbar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserAuthData, userActions } from 'entities/User';
var activeStyle = function (_a) {
    var isActive = _a.isActive;
    return isActive
        ? { color: 'var(--secondary-color-inverted)' }
        : { color: 'var(--primary-color-inverted)' };
};
export var Navbar = function (_a) {
    var className = _a.className;
    var t = useTranslation('translation').t;
    var dispatch = useDispatch();
    var authData = useSelector(selectUserAuthData);
    var _b = useState(false), isOpenAuthModal = _b[0], setIsOpenAuthModal = _b[1];
    var handleCloseAuthModal = function () {
        setIsOpenAuthModal(false);
    };
    var handleOpenAuthModal = function () {
        setIsOpenAuthModal(true);
    };
    var handleLogout = function () {
        dispatch(userActions.logout());
    };
    var isAuth = Boolean(authData);
    return (_jsxs("div", __assign({ className: classNames([module.navbar, className]) }, { children: [_jsx("div", __assign({ className: module.logo }, { children: "LOGO" })), _jsxs("div", __assign({ className: module.links }, { children: [isAuth
                        ? (_jsx(Button, __assign({ size: ButtonSize.SM, variant: ButtonVariant.FILLED, onClick: handleLogout }, { children: t('Выйти') })))
                        : (_jsx(Button, __assign({ size: ButtonSize.SM, variant: ButtonVariant.FILLED, onClick: handleOpenAuthModal }, { children: t('Войти') }))), _jsx(LoginModal, { onClose: handleCloseAuthModal, isOpen: isOpenAuthModal })] }))] })));
};
//# sourceMappingURL=Navbar.js.map