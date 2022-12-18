import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ProfilePage } from 'pages/ProfilePage';
import { createElement } from 'react';
import { ArticlesPage } from 'pages/ArticlesPage';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';
export var ROUTE_PATH = {
    MAIN: '/',
    ABOUT: '/about',
    PROFILE: '/profile/',
    ARTICLES: '/articles',
    ARTICLE_DETAILS: '/articles/',
    // last
    NOT_FOUND: '*',
};
var routeConfig = ({
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
    //last
    NOT_FOUND: {
        path: '*',
        element: createElement(NotFoundPage),
    },
});
export var routes = Object.values(routeConfig);
//# sourceMappingURL=routeConfig.js.map