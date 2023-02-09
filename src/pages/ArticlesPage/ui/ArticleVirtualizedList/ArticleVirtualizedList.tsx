import type {Article} from '@/entities/Article';
import {ArticleListItem, ArticleListItemSkeleton} from '@/entities/Article';
import {useAppDispatch} from '@/shared/hooks';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button} from '@/shared/ui/Button';
import {Card} from '@/shared/ui/Card';
import {Title} from '@/shared/ui/Title';
import {VirtualizedList} from '@/shared/ui/VirtualizedList';
import type {HTMLAttributeAnchorTarget} from 'react';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {
	selectArticlesPageHasMore,
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {selectArticleVirtualizedListItemIndex} from '../../model/selectors/selectArticleVirtualizedListItemIndex';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {selectArticles} from '../../model/slice/articlesPageSlice';
import {articleVirtualizedListActions} from '../../model/slice/articleVirtualizedListSlice';
import module from './ArticleVirtualizedList.module.css';

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
