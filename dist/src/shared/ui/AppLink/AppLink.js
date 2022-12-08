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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import module from './AppLink.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Link } from 'react-router-dom';
export var AppLinkVariant;
(function (AppLinkVariant) {
    AppLinkVariant["MAIN"] = "main";
    AppLinkVariant["INVERTED"] = "inverted";
})(AppLinkVariant || (AppLinkVariant = {}));
export var AppLink = function (_a) {
    var className = _a.className, _b = _a.variant, variant = _b === void 0 ? AppLinkVariant.MAIN : _b, children = _a.children, restProp = __rest(_a, ["className", "variant", "children"]);
    return (_jsx(Link, __assign({}, restProp, { className: classNames([module.appLink, className, module[variant]]) }, { children: children })));
};
//# sourceMappingURL=AppLink.js.map