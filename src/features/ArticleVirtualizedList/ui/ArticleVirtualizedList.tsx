import {classNames} from 'shared/lib/classNames/classNames';
import module from './ArticleVirtualizedList.module.css';
import type {HTMLAttributeAnchorTarget} from 'react';
import React from 'react';
import {VirtualizedList} from 'shared/ui/VirtualizedList/VirtualizedList';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleItem/ArticleListItemSkeleton';
import {Card} from 'shared/ui/Card/Card';
import {Title} from 'shared/ui/Title/Title';
import {ArticleListItem} from 'entities/Article/ui/ArticleItem/ArticleListItem';
import type {Article} from 'entities/Article';
import {ArticleView} from 'entities/Article';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'shared/hooks';
import {articleVirtualizedListActions} from 'features/ArticleVirtualizedList/model/slice/articleVirtualizedListSlice';
import {
	selectArticleVirtualizedListItemIndex,
} from 'features/ArticleVirtualizedList/model/selectors/selectArticleVirtualizedListItemIndex';
import {Button} from 'shared/ui/Button/Button';

interface ArticleVirtualizedListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	hasMore?: boolean;
	view?: ArticleView;
	target?: HTMLAttributeAnchorTarget;
	fetchNextPage: () => void;
}

export const ArticleVirtualizedList = (props: ArticleVirtualizedListProps) => {
	const {hasMore, isLoading, fetchNextPage, articles, view = ArticleView.LIST, target, className} = props;

	const itemIndex = useSelector(selectArticleVirtualizedListItemIndex);

	const dispatch = useAppDispatch();

	const handleVirtualIndexSet = (index: number) => () => {
		dispatch(articleVirtualizedListActions.setItemIndex(index));
	};

	const handlePageScrollReset = () => {
		window.scrollTo({top: 0});
	};

	return (
		<div className={classNames([className])}>
			<VirtualizedList<Article>
				dataList={articles}
				isLoading={isLoading}
				estimateSize={650}
				hasMore={hasMore}
				scrollIndex={itemIndex}
				fetchNextPage={fetchNextPage}>
				{(article, {isLoaderRow, virtualItemIndex}) => (
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
					</>
				)}
			</VirtualizedList>
			<Button onClick={handlePageScrollReset} square className={module.pageUpBtn}>Up</Button>
		</div>
	);
};
