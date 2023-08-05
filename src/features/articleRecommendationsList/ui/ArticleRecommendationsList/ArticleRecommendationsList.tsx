import {ArticleList} from '@/entities/Article';
import {classNames} from '@/shared/lib/classNames/classNames';
import {VStack} from '@/shared/ui/Stack';
import {Title} from '@/shared/ui/Title';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useArticleRecommendationsList} from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
	className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
	const {className} = props;
	const {t} = useTranslation();
	const {data: articles, isLoading} = useArticleRecommendationsList(4);

	if (!articles) {
		return <Title order={3}>{t('Рекомендаций не найдено')}</Title>;
	}

	return (
		<VStack data-testid="ArticleRecommendationsList" gap="2" className={classNames([className])}>
			<Title order={3}>{t('Рекомендуем')}</Title>
			<ArticleList articles={articles} target="_blank" isLoading={isLoading}/>
		</VStack>
	);
});

ArticleRecommendationsList.displayName = 'ArticleRecommendationsList';
