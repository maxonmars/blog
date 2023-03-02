import {rest} from 'msw';
import {articleRatings, articles, notificationList} from '../data.mock';

export const mockedArticlesFetch = rest.get('/articles', (req, res, ctx) => {
	return res(ctx.json(articles));
});

export const mockedArticleRatingsFetch = rest.get(
	'/article-ratings',
	(req, res, ctx) => {
		return res(ctx.json(articleRatings));
	},
);

export const mockedNotificationList = rest.get(
	'/notifications',
	(req, res, ctx) => {
		return res(ctx.json(notificationList));
	},
);
