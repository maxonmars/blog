import module from './ArticleList.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {Article} from '../../model/types/article';
import {ArticleView} from '../../model/types/article';
import {ArticleListItem} from '../ArticleItem/ArticleListItem';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton';
import {useTranslation} from 'react-i18next';
import {Text, TextSize} from 'shared/ui/Text/Text';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view: ArticleView;
}

const getSkeletons = (view: ArticleView) => {
	return new Array(view === ArticleView.LIST ? 3 : 9).fill(0).map((item, index) => {
		return <ArticleListItemSkeleton key={index} view={view}/>;
	});
};

export const ArticleList = ({className, articles, isLoading, view}: ArticleListProps) => {
	const {t} = useTranslation();
	const renderArticle = (article: Article) => {
		return <ArticleListItem key={article.id} article={article} view={view}/>;
	};

	if (!isLoading && !articles.length) {
		return (
			<div>
				<Text size={TextSize.LG}>{t('Статьи не найдены')}</Text>
			</div>
		);
	}

	return (
		<div className={classNames([module.articleList, className, module[view]])}>
			{articles.length > 0
				? articles.map(renderArticle)
				: null}
			{isLoading && getSkeletons(view)}
		</div>
	);
};
