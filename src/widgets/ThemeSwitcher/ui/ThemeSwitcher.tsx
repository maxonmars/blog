import module from './ThemeSwitcher.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {IcoThinMoonStars, IcoThinSunBright} from 'shared/assets/icons';
import {Theme} from 'shared/lib/theme/ThemeContext';
import {useTheme} from 'shared/lib/theme';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
	const {toggleTheme, theme} = useTheme();
	return (
		<Button
			className={classNames([className])}
			variant={ButtonVariant.SUBTLE}
			square
			inverted
			size={ButtonSize.MD}
			onClick={toggleTheme}>
			{theme === Theme.DARK
				? <IcoThinMoonStars/>
				: <IcoThinSunBright/>}
		</Button>
	);
};
