import type {FC} from 'react';
import {useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from 'shared/lib/theme';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
	initialTheme?: Theme;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children, initialTheme}) => {
	const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme);

	document.body.setAttribute(`data-${LOCAL_STORAGE_THEME_KEY}`, theme);
	// useEffect(() => {
	// 	document.body.setAttribute(`data-${LOCAL_STORAGE_THEME_KEY}`, theme);
	// 	return () => {
	// 		document.body.removeAttribute(`data-${LOCAL_STORAGE_THEME_KEY}`);
	// 	};
	// }, [theme]);

	const onChangeTheme = (newTheme: Theme) => {
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return (
		<ThemeContext.Provider value={{setTheme: onChangeTheme, theme}}>
			{children}
		</ThemeContext.Provider>
	);
};
