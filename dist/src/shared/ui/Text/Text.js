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
import module from './Text.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
export var TextVariant;
(function (TextVariant) {
    TextVariant["DEFAULT"] = "default";
    TextVariant["RED"] = "red";
})(TextVariant || (TextVariant = {}));
export var TextSize;
(function (TextSize) {
    TextSize["SM"] = "sm";
    TextSize["MD"] = "md";
    TextSize["LG"] = "lg";
})(TextSize || (TextSize = {}));
export var Text = function (_a) {
    var className = _a.className, children = _a.children, _b = _a.variant, variant = _b === void 0 ? TextVariant.DEFAULT : _b, _c = _a.size, size = _c === void 0 ? TextSize.MD : _c;
    return (_jsx("p", __assign({ className: classNames([module.text, className, module[variant], module[size]]) }, { children: children })));
};
//# sourceMappingURL=Text.js.map