import {selectArticleDetailsData} from '@/entities/Article';
import {getRouteArticleEdit, getRouteArticles} from '@/shared/const/router';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ButtonVariant} from '@/shared/ui/Button';
import {HStack} from '@/shared/ui/Stack';
import {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {selectArticleDetailsIsEdit} from '../../model/selectors/article';

interface ArticleDetailsPageHeaderProps {
	className?: string;
}

export const ArticleDetailsPageHeader = ({className}: ArticleDetailsPageHeaderProps) => {
	const {t} = useTranslation('articleDetailsPage');
	const navigate = useNavigate();
	const isEditArticle = useSelector(selectArticleDetailsIsEdit);
	const article = useSelector(selectArticleDetailsData);

	const handleArticleListBack = useCallback(() => {
		navigate(getRouteArticles());
	}, [navigate]);

	const handleArticleEdit = useCallback(() => {
		navigate(getRouteArticleEdit(article?.id));
	}, [navigate, article?.id]);

	return (
		<HStack isMax justify="between" className={classNames([className])}>
			<Button
				onClick={handleArticleListBack}
				variant={ButtonVariant.OUTLINE}>
				{t('Назад к списку')}
			</Button>
			{isEditArticle
				? (
					<Button
						onClick={handleArticleEdit}
						variant={ButtonVariant.OUTLINE}>
						{t('Редактировать')}
					</Button>)
				: null}
		</HStack>
	);
};
