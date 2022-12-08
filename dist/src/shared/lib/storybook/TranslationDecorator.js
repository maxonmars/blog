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
import { I18nextProvider } from 'react-i18next';
import { PageLoader } from 'widgets/PageLoader';
import { Suspense } from 'react';
import i18n from 'shared/config/i18n/i18n';
export var translationDecorator = function (Story) {
    return (_jsx(I18nextProvider, __assign({ i18n: i18n }, { children: _jsx(Suspense, __assign({ fallback: _jsx(PageLoader, { className: "app-suspense-loader" }) }, { children: _jsx(Story, {}) })) })));
};
//# sourceMappingURL=TranslationDecorator.js.map