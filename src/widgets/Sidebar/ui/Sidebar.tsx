import module from './Sidebar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher/ui/LangSwitcher';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const [isCollapsed, setIsCollapsed] = useState(true);

	const onToggle = () => {
		setIsCollapsed(prevState => !prevState);
	};

	return (
		<div className={classNames([module.sidebar, className], {[module.collapsed]: isCollapsed})}>
			<button onClick={onToggle}>collapse</button>
			<ThemeSwitcher/>
			<LangSwitcher/>
		</div>
	);
};
