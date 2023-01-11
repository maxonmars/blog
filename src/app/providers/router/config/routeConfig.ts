import type {RouteObject} from 'react-router-dom';
import {MainPage} from '@/pages/MainPage';
import {AboutPage} from '@/pages/AboutPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import {ProfilePage} from '@/pages/ProfilePage';
import {createElement} from 'react';
import {ArticlesPage} from '@/pages/ArticlesPage';
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage';
import {ArticleEditPage} from '@/pages/ArticleEditPage';
import AdminPage from '@/pages/AdminPage/ui/AdminPage';
import {UserRoles} from '@/entities/User';
import {ForbiddenPage} from '@/pages/ForbiddenPage';

export const ROUTE_PATH = {
	MAIN: '/',
	ABOUT: '/about',
	PROFILE: '/profile/',
	ARTICLES: '/articles',
	ARTICLE_DETAILS: '/articles/',
	ARTICLE_CREATE: '/articles/new',
	ARTICLE_EDIT: '/articles/:id/edit',
	ADMIN: '/admin',
	FORBIDDEN: '/forbidden',
	// last
	NOT_FOUND: '*',
} as const;

type PathKey = keyof typeof ROUTE_PATH;

interface PathValue extends RouteObject {
	path: string;
	element: JSX.Element;
	authOnly?: boolean;
	roles?: UserRoles[];
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
		path: ROUTE_PATH.PROFILE + ':id',
		element: createElement(ProfilePage),
		authOnly: true,
	},
	ARTICLES: {
		path: ROUTE_PATH.ARTICLES,
		element: createElement(ArticlesPage),
		authOnly: true,
	},
	ARTICLE_DETAILS: {
		path: ROUTE_PATH.ARTICLE_DETAILS + ':id',
		element: createElement(ArticleDetailsPage),
		authOnly: true,
	},
	ARTICLE_CREATE: {
		path: ROUTE_PATH.ARTICLE_CREATE,
		element: createElement(ArticleEditPage),
		authOnly: true,
	},
	ARTICLE_EDIT: {
		path: ROUTE_PATH.ARTICLE_EDIT,
		element: createElement(ArticleEditPage),
		authOnly: true,
	},
	ADMIN: {
		path: ROUTE_PATH.ADMIN,
		element: createElement(AdminPage),
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MANAGER],
	},
	FORBIDDEN: {
		path: ROUTE_PATH.FORBIDDEN,
		element: createElement(ForbiddenPage),
	},
	//last
	NOT_FOUND: {
		path: '*',
		element: createElement(NotFoundPage),
	},
});

export const routes = Object.values(routeConfig);
