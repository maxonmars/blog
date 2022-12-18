import {lazy} from 'react';

export const ArticleEditPageAsync = lazy(async () => new Promise(resolve => {
	setTimeout(() => {
		// @ts-expect-error
		resolve(import('./ArticleEditPage'));
	}, 400);
}));
