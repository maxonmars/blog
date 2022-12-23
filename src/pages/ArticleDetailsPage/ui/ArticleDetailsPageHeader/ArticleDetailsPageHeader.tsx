import module from './ArticleDetailsPageHeader.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {useCallback} from 'react';
import {ROUTE_PATH} from 'app/providers/router';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {selectArticleDetailsData} from 'entities/Article/model/selectors/selectArticleDetails';
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
		navigate(ROUTE_PATH.ARTICLES);
	}, [navigate]);

	const handleArticleEdit = useCallback(() => {
		navigate(`${ROUTE_PATH.ARTICLE_DETAILS}${article?.id ?? ''}/edit`);
	}, [navigate, article?.id]);

	return (
		<div className={classNames([module.articleDetailsPageHeader, className])}>
			<Button
				onClick={handleArticleListBack}
				variant={ButtonVariant.OUTLINE}>
				{t('Назад к списку')}
			</Button>
			{isEditArticle ? <Button
				onClick={handleArticleEdit}
				variant={ButtonVariant.OUTLINE}>
				{t('Редактировать')}
			</Button> : null}
		</div>
	);
};
