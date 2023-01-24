import type {Rating} from '@/entities/ratingCard';
import {rtkApi} from '@/shared/api/rtkApi';

interface GetArticleRatingsArgs {
	articleId: string;
	userId: string;
}

interface SetArticleRateArgs extends GetArticleRatingsArgs {
	rate: number;
	feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
	endpoints: build => ({
		getArticleRatings: build.query<Rating[], GetArticleRatingsArgs>({
			query: ({articleId, userId}) => ({
				url: '/article-ratings',
				params: {
					articleId,
					userId,
				},
			}),
		}),
		postArticleRate: build.mutation<Rating, SetArticleRateArgs>({
			query: arg => ({
				url: 'article-ratings',
				method: 'POST',
				body: arg,
			}),
		}),
	}),
	overrideExisting: false,
});

export const useGetArticleRatings = articleRatingApi.useGetArticleRatingsQuery;
export const usePostArticleRate = articleRatingApi.usePostArticleRateMutation;
