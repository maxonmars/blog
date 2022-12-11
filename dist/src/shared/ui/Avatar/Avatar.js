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
import module from './Avatar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
export var AvatarSize;
(function (AvatarSize) {
    AvatarSize["SM"] = "50px";
    AvatarSize["MD"] = "100px";
    AvatarSize["LG"] = "200px";
})(AvatarSize || (AvatarSize = {}));
export var Avatar = memo(function (_a) {
    var className = _a.className, _b = _a.size, size = _b === void 0 ? AvatarSize.SM : _b, _c = _a.alt, alt = _c === void 0 ? 'аватар' : _c, restProps = __rest(_a, ["className", "size", "alt"]);
    return (_jsx("img", __assign({}, restProps, { alt: alt, width: size, height: size, className: classNames([module.avatar, className]) })));
});
Avatar.displayName = 'Avatar';
//# sourceMappingURL=Avatar.js.map