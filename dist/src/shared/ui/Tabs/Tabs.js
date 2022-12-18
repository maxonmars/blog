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
import module from './Tabs.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Card, CardVariant } from 'shared/ui/Card/Card';
import { typedMemo } from 'shared/lib/typedMemo/typedMemo';
export var Tabs = typedMemo(function (_a) {
    var className = _a.className, tabs = _a.tabs, onTabClick = _a.onTabClick, selectedValue = _a.selectedValue;
    var getSelectedTab = function (tabValue) {
        return tabValue === selectedValue ? CardVariant.DEFAULT : CardVariant.OUTLINE;
    };
    var handleCardClick = function (tab) { return function () {
        onTabClick(tab);
    }; };
    return (_jsx("div", __assign({ className: classNames([module.tabs, className]) }, { children: tabs.map(function (tab) {
            return (_jsx(Card, __assign({ className: module.tab, variant: getSelectedTab(tab.value), onClick: handleCardClick(tab) }, { children: tab.content }), tab.value));
        }) })));
});
//# sourceMappingURL=Tabs.js.map