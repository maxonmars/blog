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
import { jsx as _jsx } from "react/jsx-runtime";
import { Modal } from 'shared/ui/Modal/Modal';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader/Loader';
export var LoginModal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose;
    var t = useTranslation().t;
    return (_jsx(Modal, __assign({ isOpened: isOpen, onClose: onClose, titleOrder: 3, title: t('Пожалуйста, авторизуйтесь.') }, { children: function (onClose) {
            return _jsx(Suspense, __assign({ fallback: _jsx(Loader, {}) }, { children: _jsx(LoginFormAsync, { onCloseModal: onClose }) }));
        } })));
};
//# sourceMappingURL=LoginModal.js.map