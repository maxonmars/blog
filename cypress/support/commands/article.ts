import type { Article } from '../../../src/entities/Article';

const defaultArticle = {
	title: 'Testing Article',
	subtitle: 'other testing article',
	img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
	views: 1022,
	createdAt: '26.04.2022',
	userId: '1',
	type: [
		'IT',
	],
	blocks: [],
};

export const createArticle = (article?: Article) => {
	return cy
		.request({
			method: 'POST',
			url: 'http://localhost:8000/articles',
			headers: {Authorization: 'dasd'},
			body: article ?? defaultArticle,
		}).then((res: Cypress.Response<Article>) => res.body);
};

export const removeArticle = (articleId: string) => {
	return cy
		.request({
			method: 'DELETE',
			url: `http://localhost:8000/articles/${articleId}`,
			headers: {Authorization: 'dasd'},
		});
};

declare global {
	namespace Cypress {
		interface Chainable {
			createArticle(article?: Article): Chainable<Article>;
			removeArticle(articleId: string): Chainable<void>;
		}
	}
}
