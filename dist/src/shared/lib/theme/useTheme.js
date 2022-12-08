import { useContext } from 'react';
import { Theme, ThemeContext } from './ThemeContext';
var themSwitchChain = {
    dark: Theme.LIGHT,
    light: Theme.BACTERIUM,
    bacterium: Theme.DARK,
};
export var useTheme = function () {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme = themSwitchChain[theme !== null && theme !== void 0 ? theme : Theme.LIGHT];
        // const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
    };
    return {
        theme: theme !== null && theme !== void 0 ? theme : Theme.LIGHT,
        toggleTheme: toggleTheme,
    };
};
//# sourceMappingURL=useTheme.js.map