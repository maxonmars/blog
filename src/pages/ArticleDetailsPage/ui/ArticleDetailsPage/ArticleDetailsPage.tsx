import module from './ArticleDetailsPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = ({className}: ArticleDetailsPageProps) => {
	const {t} = useTranslation('articleDetailsPage');
	return (
		<div className={classNames([module.articleDetailsPage, className])}>
			ARTICLE DETAILS
		</div>
	);
};

export default ArticleDetailsPage;
