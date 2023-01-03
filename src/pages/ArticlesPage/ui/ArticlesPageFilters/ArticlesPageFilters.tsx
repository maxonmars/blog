import module from './ArticlesPageFilters.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {ArticleViewSelector} from 'features/ArticleViewSelector/ui/ArticleViewSelector';
import type {ArticleSortField, ArticleView} from 'entities/Article';
import {articlesPageActions} from '../../model/slice/articlesPageSlice';
import {ARTICLES_VIEW_STORAGE_KEY} from 'shared/const/localStorage';
import {useSelector} from 'react-redux';
import {
	selectArticlesPageOrder,
	selectArticlesPageSearch,
	selectArticlesPageSort,
	selectArticlesPageType,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {useAppDispatch} from 'shared/hooks';
import {useTranslation} from 'react-i18next';
import {Card} from 'shared/ui/Card/Card';
import {Input} from 'shared/ui/Input/Input';
import {ArticleSortSelector} from 'entities/ArticleSortSelector/ArticleSortSelector';
import type {SortOrder} from 'shared/types';
import {fetchArticlesList} from '../../model/services/fetchArticlesList/fetchArticlesList';
import {useDebounce} from 'shared/hooks/useDebounce/useDebounce';
import {useCallback} from 'react';
import {ArticleTypeTabs} from 'features/ArticleTypeTabs/ArticleTypeTabs';
import {articleVirtualizedListActions} from '../../model/slice/articleVirtualizedListSlice';
import type {ArticleType} from 'entities/Article/model/consts/article';

interface ArticlesPageFiltersProps {
	className?: string;
}

export const ArticlesPageFilters = ({className}: ArticlesPageFiltersProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const view = useSelector(selectArticlesPageView);
	const sortField = useSelector(selectArticlesPageSort);
	const sortOrder = useSelector(selectArticlesPageOrder);
	const search = useSelector(selectArticlesPageSearch);
	const type = useSelector(selectArticlesPageType);

	const resetScroll = () => {
		dispatch(articleVirtualizedListActions.setItemIndex(undefined));
	};

	const handleViewChange = (view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
		localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, view);
		resetScroll();
	};

	const fetchData = useCallback(() => {
		void dispatch(fetchArticlesList({replace: true}));
	}, [dispatch]);

	const debounceFetchData = useDebounce(fetchData, 500);

	const handleSortChange = (sortField: ArticleSortField) => {
		dispatch(articlesPageActions.setSort(sortField));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
		resetScroll();
	};

	const handleOrderChange = (order: SortOrder) => {
		dispatch(articlesPageActions.setOrder(order));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
		resetScroll();
	};

	const handleSearchChange = (search: string) => {
		dispatch(articlesPageActions.setSearch(search));
		dispatch(articlesPageActions.setPage(1));
		debounceFetchData();
		resetScroll();
	};

	const handleTabChange = (value: ArticleType) => {
		dispatch(articlesPageActions.setType(value));
		dispatch(articlesPageActions.setPage(1));
		fetchData();
		resetScroll();
	};

	return (
		<div className={classNames([module.articlesPageFilters, className])}>
			<ArticleViewSelector onViewChange={handleViewChange} view={view}/>
			<ArticleSortSelector
				order={sortOrder}
				sort={sortField}
				onChangeSortField={handleSortChange}
				onChangeOrder={handleOrderChange}/>
			<Card>
				<Input value={search} onChange={handleSearchChange} placeholder={t('Поиск')}/>
			</Card>
			<ArticleTypeTabs onTabChange={handleTabChange} selectedType={type}/>
		</div>
	);
};
