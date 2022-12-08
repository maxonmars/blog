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
import module from './Title.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
export var Title = memo(function (_a) {
    var className = _a.className, children = _a.children, order = _a.order;
    var titleClass = classNames([module.title, className]);
    switch (order) {
        case 1: {
            return _jsx("h1", __assign({ className: titleClass }, { children: children }));
        }
        case 2: {
            return _jsx("h2", __assign({ className: titleClass }, { children: children }));
        }
        case 3: {
            return _jsx("h3", __assign({ className: titleClass }, { children: children }));
        }
        case 4: {
            return _jsx("h4", __assign({ className: titleClass }, { children: children }));
        }
        default: {
            return _jsx("h1", __assign({ className: titleClass }, { children: children }));
        }
    }
});
Title.displayName = 'Title';
//# sourceMappingURL=Title.js.map