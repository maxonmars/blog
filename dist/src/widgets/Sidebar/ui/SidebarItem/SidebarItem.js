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
import module from './SidebarItem.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkVariant } from 'shared/ui/AppLink/AppLink';
export var SidebarItem = function (_a) {
    var _b;
    var item = _a.item, isCollapsed = _a.isCollapsed;
    return (_jsx(AppLink, __assign({ to: item.path, variant: AppLinkVariant.INVERTED }, { children: _jsxs("div", __assign({ className: classNames([module.navLinkContent], (_b = {}, _b[module.collapsed] = isCollapsed, _b)) }, { children: [_jsx(item.Icon, {}), _jsx("span", { children: item.text })] })) })));
};
//# sourceMappingURL=SidebarItem.js.map