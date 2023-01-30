import {selectUserAuthData} from '@/entities/User';
import {IcoThinAlien, IcoThinFileContract, IcoThinHouse, IcoThinSquareList} from '@/shared/assets/icons';
import {ROUTE_PATH} from '@/shared/const/router';
import {createSelector} from '@reduxjs/toolkit';
import type {SidebarItemType} from '../types/sidebar';

export const selectSidebarItems = createSelector(
	selectUserAuthData,
	userData => {
		const sidebarItems: SidebarItemType[] = [
			{
				path: ROUTE_PATH.MAIN,
				Icon: IcoThinHouse,
				text: 'Главная',
			},
			{
				path: ROUTE_PATH.ABOUT,
				Icon: IcoThinSquareList,
				text: 'О сайте',
			},
		];

		const authUserSidebarItems = userData
			? [
				{
					path: `${ROUTE_PATH.PROFILE}${userData.id}`,
					Icon: IcoThinAlien,
					text: 'Профиль',
				},
				{
					path: ROUTE_PATH.ARTICLES,
					Icon: IcoThinFileContract,
					text: 'Статьи',
				},
			]
			: [];

		return [...sidebarItems, ...authUserSidebarItems];
	},
);
