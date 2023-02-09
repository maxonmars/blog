import module from './SidebarItem.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink, AppLinkVariant} from '@/shared/ui/AppLink';
import React from 'react';
import type {SidebarItemType} from '../../model/types/sidebar';

interface SidebarItemProps {
	item: SidebarItemType;
	isCollapsed: boolean;
}

export const SidebarItem = ({item, isCollapsed}: SidebarItemProps) => {
	return (
		<AppLink
			to={item.path}
			variant={AppLinkVariant.INVERTED}>
			<div className={classNames([module.navLinkContent], {[module.collapsed]: isCollapsed})}>
				<item.Icon/>
				<span>{item.text}</span>
			</div>
		</AppLink>
	);
};
