import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {createSelector} from '@reduxjs/toolkit';
import {selectUserAuthData} from 'entities/User';
import {ROUTE_PATH} from 'app/providers/router';
import {IcoThinAlien, IcoThinFileContract, IcoThinHouse, IcoThinSquareList} from 'shared/assets/icons';
import type {SidebarItemType} from 'widgets/Sidebar/model/types/sidebar';

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
