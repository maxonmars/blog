import {lazy} from 'react';

export const ArticleDetailsPageAsync = lazy(async () => new Promise(resolve => {
	setTimeout(() => {
		// @ts-expect-error
		resolve(import('./ArticleDetailsPage'));
	}, 400);
}));
