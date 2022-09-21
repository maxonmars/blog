import {FC, useState} from "react";
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

export const ThemeProvider: FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const onChangeTheme = (newTheme: Theme) => {
        setTheme(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return (
        <ThemeContext.Provider value={{setTheme: onChangeTheme, theme}}>
            {children}
        </ThemeContext.Provider>
    );
};