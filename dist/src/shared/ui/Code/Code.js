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
import module from './Code.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { IcoThinCopy } from 'shared/assets/icons/index';
export var Code = function (_a) {
    var className = _a.className, children = _a.children;
    var handleCopy = function () {
        void navigator.clipboard.writeText(children);
    };
    return (_jsxs("pre", __assign({ className: classNames([module.codeWrapper, className]) }, { children: [_jsx("code", __assign({ className: module.codeBlock }, { children: children })), _jsx(Button, __assign({ onClick: handleCopy, className: module.copyBtn, square: true, variant: ButtonVariant.SUBTLE, size: ButtonSize.SM }, { children: _jsx(IcoThinCopy, { className: module.copyIcon }) }))] })));
};
//# sourceMappingURL=Code.js.map