import type {RouteObject} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {createElement} from 'react';
import {NotFoundPage} from 'pages/NotFoundPage';

export const ROUTE_PATH = {
	MAIN: '/',
	ABOUT: '/about',
	NOT_FOUND: '*',
} as const;

type PathKey = keyof typeof ROUTE_PATH;

type ValueOf<T> = T[keyof T];

interface PathValue extends RouteObject {
	path: ValueOf<typeof ROUTE_PATH>;
}

const routeConfig: Record<PathKey, PathValue> = ({
	MAIN: {
		path: ROUTE_PATH.MAIN,
		element: createElement(MainPage),
	},
	ABOUT: {
		path: ROUTE_PATH.ABOUT,
		element: createElement(AboutPage),
	},
	NOT_FOUND: {
		path: '*',
		element: createElement(NotFoundPage),
	},
});

export const routes = Object.values(routeConfig);
