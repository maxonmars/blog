import module from './ArticlesPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';

interface ArticlesPageProps {
	className?: string;
}

const ArticlesPage = ({className}: ArticlesPageProps) => {
	return (
		<div className={classNames([module.articlesPage, className])}>
ARTICLES
		</div>
	);
};

export default ArticlesPage;
