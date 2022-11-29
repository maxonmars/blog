import {useContext} from 'react';
import {Theme, ThemeContext} from './ThemeContext';

interface UseThemeResult {
	theme: Theme;
	toggleTheme: () => void;
}

const themSwitchChain = {
	dark: Theme.LIGHT,
	light: Theme.BACTERIUM,
	bacterium: Theme.DARK,
};

export const useTheme = (): UseThemeResult => {
	const {theme, setTheme} = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = themSwitchChain[theme ?? Theme.LIGHT];
		// const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;

		setTheme?.(newTheme);
	};

	return {
		theme: theme ?? Theme.LIGHT,
		toggleTheme,
	};
};
