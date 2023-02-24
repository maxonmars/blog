import {UserRoles} from '@/entities/User';
import {AboutPage} from '@/pages/AboutPage';
import {AdminPage} from '@/pages/AdminPage';
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage';
import {ArticleEditPage} from '@/pages/ArticleEditPage';
import {ArticlesPage} from '@/pages/ArticlesPage';
import {ForbiddenPage} from '@/pages/ForbiddenPage';
import {MainPage} from '@/pages/MainPage';
import {NotFoundPage} from '@/pages/NotFoundPage';
import {ProfilePage} from '@/pages/ProfilePage';
import {
	getRouteAbout,
	getRouteAdmin,
	getRouteArticleCreate,
	getRouteArticleDetails,
	getRouteArticleEdit,
	getRouteArticles,
	getRouteForbidden,
	getRouteMain,
	getRouteProfile,
} from '@/shared/const/router';
import {createElement} from 'react';
import type {RouteObject} from 'react-router-dom';

interface PathValue extends RouteObject {
	path: string;
	element: JSX.Element;
	authOnly?: boolean;
	roles?: UserRoles[];
}

const routeConfig: Record<string, PathValue> = {
	MAIN: {
		path: getRouteMain(),
		element: createElement(MainPage),
	},
	ABOUT: {
		path: getRouteAbout(),
		element: createElement(AboutPage),
	},
	PROFILE: {
		path: getRouteProfile(),
		element: createElement(ProfilePage),
		authOnly: true,
	},
	ARTICLES: {
		path: getRouteArticles(),
		element: createElement(ArticlesPage),
		authOnly: true,
	},
	ARTICLE_DETAILS: {
		path: getRouteArticleDetails(),
		element: createElement(ArticleDetailsPage),
		authOnly: true,
	},
	ARTICLE_CREATE: {
		path: getRouteArticleCreate(),
		element: createElement(ArticleEditPage),
		authOnly: true,
	},
	ARTICLE_EDIT: {
		path: getRouteArticleEdit(),
		element: createElement(ArticleEditPage),
		authOnly: true,
	},
	ADMIN: {
		path: getRouteAdmin(),
		element: createElement(AdminPage),
		authOnly: true,
		roles: [UserRoles.ADMIN, UserRoles.MANAGER],
	},
	FORBIDDEN: {
		path: getRouteForbidden(),
		element: createElement(ForbiddenPage),
	},
	//last
	NOT_FOUND: {
		path: '*',
		element: createElement(NotFoundPage),
	},
};

export const routes = Object.values(routeConfig);
