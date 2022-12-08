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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import module from './Input.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
export var Input = memo(function (_a) {
    var _b;
    var className = _a.className, onChange = _a.onChange, label = _a.label, name = _a.name, props = __rest(_a, ["className", "onChange", "label", "name"]);
    var handleChange = function (e) {
        onChange === null || onChange === void 0 ? void 0 : onChange(e.target.value, e.target.name);
    };
    var id = label && name ? { id: "input-".concat(name) } : {};
    var wrapperClass = classNames([module.wrapper, className], (_b = {},
        _b[module.readOnly] = props.readOnly,
        _b[module.withLabel] = Boolean(label),
        _b));
    return (_jsxs("div", __assign({ className: wrapperClass }, { children: [label && name && _jsx("label", __assign({ className: module.label, htmlFor: "input-".concat(name) }, { children: "".concat(label, ":") })), _jsx("input", __assign({}, props, id, { name: name, className: module.input, onChange: handleChange }))] })));
});
Input.displayName = 'Input';
//# sourceMappingURL=Input.js.map