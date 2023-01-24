import {useTranslation} from 'react-i18next';
import {memo} from 'react';
import {RatingCard} from '@/entities/ratingCard';
import {useGetArticleRatings, usePostArticleRate} from '../../api/articleRatingApi';
import {useSelector} from 'react-redux';
import {selectUserAuthData} from '@/entities/User';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';

export interface ArticleRatingProps {
	className?: string;
	articleId?: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
	const {className, articleId} = props;
	const {t} = useTranslation();
	const userData = useSelector(selectUserAuthData);
	const {data, isLoading} = useGetArticleRatings({
		articleId: articleId ?? '',
		userId: userData?.id ?? '',
	},
	{refetchOnMountOrArgChange: true},
	);

	const [rateArticleMutation, {isLoading: isLoadingChangedRate, data: dataChangedRate}] = usePostArticleRate();

	if (isLoading || isLoadingChangedRate) {
		return <Skeleton width="100%" height={120} />;
	}

	const rating = data?.[0]?.rate;
	const changedRate = dataChangedRate?.rate;
	const currentRate = rating ?? changedRate ?? 0;

	const handleRateSend = (rate: number, feedback?: string) => {
		void rateArticleMutation({
			articleId: articleId ?? '',
			userId: userData?.id ?? '',
			rate,
			feedback,
		});
	};

	return (
		<RatingCard
			onRateSend={handleRateSend}
			rate={currentRate}
			title={t('Оцените статью')}
			feedbackTitle={t('Оставтье свой отзыв о статье')}
			hasFeedback />
	);
});

ArticleRating.displayName = 'ArticleRating';

export default ArticleRating;
