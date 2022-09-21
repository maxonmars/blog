import {useContext} from "react";
import {Theme, ThemeContext} from "./ThemeContext";

interface UseThemeResult {
    theme: Theme,
    toggleTheme: () => void;
}

export const useTheme = (): UseThemeResult => {
    const {theme, setTheme} = useContext(ThemeContext);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme)
    };

    return {theme, toggleTheme}
}