import {selectUserAuthData} from '@/entities/User';
import {
	IcoThinAlien,
	IcoThinFileContract,
	IcoThinHouse,
	IcoThinSquareList,
} from '@/shared/assets/icons';
import {
	getRouteAbout,
	getRouteArticles,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router';
import {createSelector} from '@reduxjs/toolkit';
import type {SidebarItemType} from '../types/sidebar';

export const selectSidebarItems = createSelector(
	selectUserAuthData,
	userData => {
		const sidebarItems: SidebarItemType[] = [
			{
				path: getRouteMain(),
				Icon: IcoThinHouse,
				text: 'Главная',
			},
			{
				path: getRouteAbout(),
				Icon: IcoThinSquareList,
				text: 'О сайте',
			},
		];

		const authUserSidebarItems = userData
			? [
					{
						path: getRouteProfile(userData.id),
						Icon: IcoThinAlien,
						text: 'Профиль',
					},
					{
						path: getRouteArticles(),
						Icon: IcoThinFileContract,
						text: 'Статьи',
					},
			]
			: [];

		return [...sidebarItems, ...authUserSidebarItems];
	},
);
