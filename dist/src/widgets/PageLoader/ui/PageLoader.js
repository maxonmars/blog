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
import module from './PageLoader.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
export var PageLoader = function (_a) {
    var className = _a.className;
    return (_jsx("div", __assign({ className: classNames([module.pageLoader, className]) }, { children: _jsx(Loader, {}) })));
};
//# sourceMappingURL=PageLoader.js.map