import module from './Sidebar.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import React, {useState} from 'react';
import {ThemeSwitcher} from 'widgets/ThemeSwitcher';
import {LangSwitcher} from 'widgets/LangSwitcher';
import {useTranslation} from 'react-i18next';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {AppLink, AppLinkVariant} from 'shared/ui/AppLink/AppLink';
import {ROUTE_PATH} from 'app/providers/router';
import {
	IcoThinChevronLeft,
	IcoThinChevronRight,
	IcoThinHouse,
	IcoThinSquareList,
} from 'shared/assets/icons';

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
			<div className={module.navigateLinks}>
				<AppLink
					to={ROUTE_PATH.MAIN}
					variant={AppLinkVariant.INVERTED}>
					<div className={module.navLinkContent}>
						<IcoThinHouse className={module.appLinkIcon}/>
						<span>{t('Главная страница')}</span>
					</div>
				</AppLink>
				<AppLink
					to={ROUTE_PATH.ABOUT}
					variant={AppLinkVariant.INVERTED}>
					<div className={module.navLinkContent}>
						<IcoThinSquareList className={module.appLinkIcon}/>
						<span>{t('О сайте')}</span>
					</div>
				</AppLink>
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
