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
import { classNames } from 'shared/lib/classNames/classNames';
import { IcoThinBacterium, IcoThinMoonStars, IcoThinSunBright } from 'shared/assets/icons';
import { useTheme } from 'shared/lib/theme';
import { Button, ButtonSize, ButtonVariant } from 'shared/ui/Button/Button';
var icon = {
    dark: _jsx(IcoThinMoonStars, {}),
    light: _jsx(IcoThinSunBright, {}),
    bacterium: _jsx(IcoThinBacterium, {}),
};
export var ThemeSwitcher = function (_a) {
    var className = _a.className;
    var _b = useTheme(), toggleTheme = _b.toggleTheme, theme = _b.theme;
    return (_jsx(Button, __assign({ className: classNames([className]), variant: ButtonVariant.SUBTLE, square: true, inverted: true, size: ButtonSize.MD, onClick: toggleTheme }, { children: icon[theme] })));
};
//# sourceMappingURL=ThemeSwitcher.js.map