import module from './Sidebar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const {t} = useTranslation();
	const [isCollapsed, setIsCollapsed] = useState(false);

	const onToggle = () => {
		setIsCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames([module.sidebar, className], {[module.collapsed]: isCollapsed})}>
			<Button
				data-testid="sidebar-toggle"
				square
				inverted
				variant={ButtonVariant.SUBTLE}
				onClick={onToggle}>{'>'}</Button>
			<ThemeSwitcher/>
			<LangSwitcher/>
		</div>
	);
};
