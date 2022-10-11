import module from './ThemeSwitcher.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import IconSun from 'shared/assets/icons/icon-sun.svg';
import IconMoon from 'shared/assets/icons/icon-moon.svg';
import {Theme} from 'shared/lib/theme/ThemeContext';
import {useTheme} from 'shared/lib/theme';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme();
	return (
		<Button
			className={classNames([className])}
			variant={ButtonVariant.SUBTLE}
			onClick={toggleTheme}>
			{theme === Theme.DARK ? <IconMoon className={module.iconMoon}/> : <IconSun className={module.iconSun}/>}
		</Button>
	);
};
