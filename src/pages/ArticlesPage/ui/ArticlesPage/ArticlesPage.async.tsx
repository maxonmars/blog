import {lazy} from 'react';

export const ArticlesPageAsync = lazy(async () => new Promise(resolve => {
	setTimeout(() => {
		// @ts-expect-error
		resolve(import('./ArticlesPage'));
	}, 1500);
}));
