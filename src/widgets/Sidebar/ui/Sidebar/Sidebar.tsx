import module from './Sidebar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {IcoThinChevronLeft, IcoThinChevronRight} from 'shared/assets/icons';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import {useSelector} from 'react-redux';
import {selectSidebarItems} from 'widgets/Sidebar/model/selectSidebarItems/selectSidebarItems';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const sidebarItemList = useSelector(selectSidebarItems);
	const [isCollapsed, setIsCollapsed] = useState(false);

	const onToggle = () => {
		setIsCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames([module.sidebar, className], {[module.collapsed]: isCollapsed})}>
			<div className={module.navigateLinks}>
				{sidebarItemList.map(item => {
					return <SidebarItem key={item.path} isCollapsed={isCollapsed} item={item}/>;
				})}
			</div>
			<Button
				data-testid="sidebar-toggle"
				className={module.collapseBtn}
				square
				inverted
				variant={ButtonVariant.SUBTLE}
				size={ButtonSize.SM}
				onClick={onToggle}>
				{isCollapsed
					? <IcoThinChevronRight/>
					: <IcoThinChevronLeft/>
				}
			</Button>
			<div className={module.switchers}>
				<ThemeSwitcher/>
				<LangSwitcher isShort={isCollapsed}/>
			</div>
		</div>
	);
};
