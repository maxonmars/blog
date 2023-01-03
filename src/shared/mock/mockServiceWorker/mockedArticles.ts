import {rest} from 'msw';
import {articles} from '../data';

export const mockedArticlesFetch = rest.get(
	'/articles',
	(req, res, ctx) => {
		return res(ctx.json(articles));
	},
);
