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
import module from './Sidebar.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
import { IcoThinChevronLeft, IcoThinChevronRight } from 'shared/assets/icons';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { selectSidebarItems } from 'widgets/Sidebar/model/selectSidebarItems/selectSidebarItems';
export var Sidebar = function (_a) {
    var _b;
    var className = _a.className;
    var sidebarItemList = useSelector(selectSidebarItems);
    var _c = useState(false), isCollapsed = _c[0], setIsCollapsed = _c[1];
    var onToggle = function () {
        setIsCollapsed(function (prevState) { return !prevState; });
    };
    return (_jsxs("div", __assign({ "data-testid": "sidebar", className: classNames([module.sidebar, className], (_b = {}, _b[module.collapsed] = isCollapsed, _b)) }, { children: [_jsx("div", __assign({ className: module.navigateLinks }, { children: sidebarItemList.map(function (item) {
                    return _jsx(SidebarItem, { isCollapsed: isCollapsed, item: item }, item.path);
                }) })), _jsx(Button, __assign({ "data-testid": "sidebar-toggle", className: module.collapseBtn, square: true, inverted: true, variant: ButtonVariant.SUBTLE, size: ButtonSize.SM, onClick: onToggle }, { children: isCollapsed
                    ? _jsx(IcoThinChevronRight, {})
                    : _jsx(IcoThinChevronLeft, {}) })), _jsxs("div", __assign({ className: module.switchers }, { children: [_jsx(ThemeSwitcher, {}), _jsx(LangSwitcher, { isShort: isCollapsed })] }))] })));
};
//# sourceMappingURL=Sidebar.js.map