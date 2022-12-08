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
import module from './Select.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
export var Select = function (_a) {
    var className = _a.className, options = _a.options, label = _a.label, selectedValue = _a.selectedValue, onChange = _a.onChange, restProps = __rest(_a, ["className", "options", "label", "selectedValue", "onChange"]);
    var optionsList = options.map(function (opt) {
        return (_jsx("option", __assign({ value: opt.value }, { children: opt.label }), opt.value));
    });
    var handleChange = function (e) {
        onChange(e.target.value);
    };
    return (_jsxs("div", __assign({ className: classNames([module.wrapper, className]) }, { children: [label && _jsx("label", { children: "".concat(label, ":") }), _jsx("select", __assign({}, restProps, { value: selectedValue, onChange: handleChange, className: module.select }, { children: optionsList }))] })));
};
//# sourceMappingURL=Select.js.map