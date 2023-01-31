import {rest} from 'msw';
import {articleRatings, articles} from '../data.mock';

export const mockedArticlesFetch = rest.get('/articles', (req, res, ctx) => {
	return res(ctx.json(articles));
});

export const mockedArticleRatingsFetch = rest.get(
	'/article-ratings',
	(req, res, ctx) => {
		return res(ctx.json(articleRatings));
	},
);
