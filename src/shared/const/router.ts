
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
