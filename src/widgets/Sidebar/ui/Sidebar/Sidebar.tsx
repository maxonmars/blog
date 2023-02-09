import {LangSwitcher} from '@/features/LangSwitcher';
import {ThemeSwitcher} from '@/features/ThemeSwitcher';
import {IcoThinChevronLeft, IcoThinChevronRight} from '@/shared/assets/icons';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonSize, ButtonVariant} from '@/shared/ui/Button';
import {useState} from 'react';
import {useSelector} from 'react-redux';
import {selectSidebarItems} from '../../model/selectSidebarItems/selectSidebarItems';
import {SidebarItem} from '../SidebarItem/SidebarItem';
import module from './Sidebar.module.css';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({className}: SidebarProps) => {
	const sidebarItemList = useSelector(selectSidebarItems);
	const [isCollapsed, setIsCollapsed] = useState(true);

	const onToggle = () => {
		setIsCollapsed(prevState => !prevState);
	};

	return (
		<div
			data-testid="sidebar"
			className={classNames([module.sidebar, className], {[module.collapsed]: isCollapsed})}>
			<div className={module.sidebarContent}>
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
			</div> {/* for position sticky */}
			<div/>
		</div>
	);
};
