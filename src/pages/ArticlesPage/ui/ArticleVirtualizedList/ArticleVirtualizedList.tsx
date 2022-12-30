import {classNames} from 'shared/lib/classNames/classNames';
import module from './ArticleVirtualizedList.module.css';
import type {HTMLAttributeAnchorTarget} from 'react';
import React, {useCallback} from 'react';
import {VirtualizedList} from 'shared/ui/VirtualizedList/VirtualizedList';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton';
import {Card} from 'shared/ui/Card/Card';
import {Title} from 'shared/ui/Title/Title';
import {ArticleListItem} from 'entities/Article/ui/ArticleItem/ArticleListItem';
import type {Article} from 'entities/Article';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'shared/hooks';
import {articleVirtualizedListActions} from '../../model/slice/articleVirtualizedListSlice';
import {selectArticleVirtualizedListItemIndex} from '../../model/selectors/selectArticleVirtualizedListItemIndex';
import {Button} from 'shared/ui/Button/Button';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {
	selectArticlesPageHasMore,
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {selectArticles} from '../../model/slice/articlesPageSlice';

interface ArticleVirtualizedListProps {
	className?: string;
	target?: HTMLAttributeAnchorTarget;
}

export const ArticleVirtualizedList = (props: ArticleVirtualizedListProps) => {
	const {target, className} = props;

	const hasMore = useSelector(selectArticlesPageHasMore);
	const isLoading = useSelector(selectArticlesPageIsLoading);
	const view = useSelector(selectArticlesPageView);
	const articles = useSelector(selectArticles.selectAll);

	const itemIndex = useSelector(selectArticleVirtualizedListItemIndex);

	const dispatch = useAppDispatch();

	const handleVirtualIndexSet = (index: number) => () => {
		dispatch(articleVirtualizedListActions.setItemIndex(index));
	};

	const handlePageScrollReset = () => {
		window.scrollTo({top: 0});
	};

	const handleNextPartLoad = useCallback(() => {
		void dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return (
		<div className={classNames([className])}>
			<VirtualizedList<Article>
				dataList={articles}
				isLoading={isLoading}
				estimateSize={650}
				hasMore={hasMore}
				scrollIndex={itemIndex}
				fetchNextPage={handleNextPartLoad}>
				{(article, {isLoaderRow, virtualItemIndex}) => {
					return (
						<>
							{isLoaderRow
								? hasMore
									? <ArticleListItemSkeleton key={article.id} view={view}/>
									: <Card key={article.id}><Title order={3}>Больше нечего загружать</Title></Card>
								: (
									<div key={article.id} style={{paddingBottom: '1em'}}>
										<ArticleListItem
											target={target}
											article={article}
											setVirtualIndex={handleVirtualIndexSet(virtualItemIndex)}
											view={view}/>
									</div>)
							}
						</>);
				}}
			</VirtualizedList>
			<Button onClick={handlePageScrollReset} square className={module.pageUpBtn}>Up</Button>
		</div>
	);
};
