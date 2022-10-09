import module from './Sidebar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher';
import {useTranslation} from 'react-i18next';

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
			<button
				data-testid="sidebar-toggle"
				onClick={onToggle}>{t('Свернуть')}</button>
			<ThemeSwitcher/>
			<LangSwitcher/>
		</div>
	);
};
