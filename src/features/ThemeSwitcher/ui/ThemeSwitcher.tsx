import {classNames} from '@/shared/lib/classNames/classNames';
import {IcoThinBacterium, IcoThinMoonStars, IcoThinSunBright} from '@/shared/assets/icons';
import {useTheme} from '@/shared/lib/theme';
import {Button, ButtonSize, ButtonVariant} from '@/shared/ui/Button';

interface ThemeSwitcherProps {
	className?: string;
}

const icon = {
	dark: <IcoThinMoonStars/>,
	light: <IcoThinSunBright/>,
	bacterium: <IcoThinBacterium/>,
};

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
			{icon[theme]}
		</Button>
	);
};
