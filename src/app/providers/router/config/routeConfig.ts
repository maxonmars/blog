import type {RouteObject} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {createElement} from 'react';
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';

export const ROUTE_PATH = {
	MAIN: '/',
	ABOUT: '/about',
	PROFILE: '/profile',
	ARTICLES: '/articles',
	ARTICLE_DETAILS_PAGE: '/articles/:id',
	// last
	NOT_FOUND: '*',
} as const;

type PathKey = keyof typeof ROUTE_PATH;

type ValueOf<T> = T[keyof T];

interface PathValue extends RouteObject {
	path: ValueOf<typeof ROUTE_PATH>;
	element: JSX.Element;
	authOnly?: boolean;
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
	PROFILE: {
		path: ROUTE_PATH.PROFILE,
		element: createElement(ProfilePage),
		authOnly: true,
	},
	ARTICLES: {
		path: ROUTE_PATH.ARTICLES,
		element: createElement(ArticlesPage),
		authOnly: true,
	},
	ARTICLE_DETAILS_PAGE: {
		path: ROUTE_PATH.ARTICLE_DETAILS_PAGE,
		element: createElement(ArticleDetailsPage),
		authOnly: true,
	},
	//last
	NOT_FOUND: {
		path: '*',
		element: createElement(NotFoundPage),
	},
});

export const routes = Object.values(routeConfig);
