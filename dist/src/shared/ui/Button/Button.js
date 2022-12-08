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
import module from './Button.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
export var ButtonVariant;
(function (ButtonVariant) {
    ButtonVariant["SUBTLE"] = "subtle";
    ButtonVariant["OUTLINE"] = "outline";
    ButtonVariant["DEFAULT"] = "default";
    ButtonVariant["FILLED"] = "filled";
})(ButtonVariant || (ButtonVariant = {}));
export var ButtonSize;
(function (ButtonSize) {
    ButtonSize["SM"] = "sm";
    ButtonSize["MD"] = "md";
    ButtonSize["LG"] = "lg";
})(ButtonSize || (ButtonSize = {}));
export var ButtonRadius;
(function (ButtonRadius) {
    ButtonRadius["SM"] = "radiusSm";
    ButtonRadius["MD"] = "radiusMd";
    ButtonRadius["LG"] = "radiusLg";
})(ButtonRadius || (ButtonRadius = {}));
export var Button = memo(function (_a) {
    var _b;
    var className = _a.className, _c = _a.variant, variant = _c === void 0 ? ButtonVariant.DEFAULT : _c, square = _a.square, _d = _a.size, size = _d === void 0 ? ButtonSize.MD : _d, _e = _a.radius, radius = _e === void 0 ? ButtonRadius.MD : _e, compact = _a.compact, inverted = _a.inverted, uppercase = _a.uppercase, children = _a.children, restProps = __rest(_a, ["className", "variant", "square", "size", "radius", "compact", "inverted", "uppercase", "children"]);
    var buttonClass = classNames([
        module.button,
        className,
        module[variant],
        module[size],
        module[radius],
    ], (_b = {},
        _b[module.square] = square,
        _b[module.uppercase] = uppercase,
        _b[module.compact] = compact,
        _b[module.inverted] = inverted,
        _b));
    return (_jsx("button", __assign({}, restProps, { className: buttonClass }, { children: children })));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map