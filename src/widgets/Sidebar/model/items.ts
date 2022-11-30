import type React from 'react';
import {ROUTE_PATH} from 'app/providers/router';
import {
	IcoThinHouse,
	IcoThinSquareList,
	IcoThinAlien,
	IcoThinFileContract,
} from 'shared/assets/icons';

export interface SidebarItemType {
	path: string;
	text: string;
	Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemList: SidebarItemType[] = [
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
	{
		path: ROUTE_PATH.PROFILE,
		Icon: IcoThinAlien,
		text: 'Профиль',
	},
	{
		path: ROUTE_PATH.ARTICLES,
		Icon: IcoThinFileContract,
		text: 'Статьи',
	},
];
