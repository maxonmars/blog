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
import module from './NotFoundPage.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
export var NotFoundPage = function (_a) {
    var className = _a.className;
    var t = useTranslation().t;
    return (_jsx("div", __assign({ className: classNames([module.notFoundPage, className]) }, { children: t('Страница не найдена') })));
};
//# sourceMappingURL=NotFoundPage.js.map