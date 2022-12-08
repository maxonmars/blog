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
import { useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/lib/theme';
var defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) || Theme.LIGHT;
export var ThemeProvider = function (_a) {
    var children = _a.children, initialTheme = _a.initialTheme;
    var _b = useState(initialTheme !== null && initialTheme !== void 0 ? initialTheme : defaultTheme), theme = _b[0], setTheme = _b[1];
    document.body.setAttribute("data-".concat(LOCAL_STORAGE_THEME_KEY), theme);
    // useEffect(() => {
    // 	document.body.setAttribute(`data-${LOCAL_STORAGE_THEME_KEY}`, theme);
    // 	return () => {
    // 		document.body.removeAttribute(`data-${LOCAL_STORAGE_THEME_KEY}`);
    // 	};
    // }, [theme]);
    var onChangeTheme = function (newTheme) {
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return (_jsx(ThemeContext.Provider, __assign({ value: { setTheme: onChangeTheme, theme: theme } }, { children: children })));
};
//# sourceMappingURL=ThemeProvider.js.map