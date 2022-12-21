import module from './ArticlesPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articlesPageReducer, selectArticles} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/hooks';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {
	selectArticlesPageHasMore,
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {ArticlesPageFilters} from 'pages/ArticlesPage/ui/ArticlesPageFilters/ArticlesPageFilters';
import {useSearchParams} from 'react-router-dom';
import {ArticleVirtualizedList} from 'features/ArticleVirtualizedList/ui/ArticleVirtualizedList';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const articles = useSelector(selectArticles.selectAll);
	const hasMore = useSelector(selectArticlesPageHasMore);
	const isLoading = useSelector(selectArticlesPageIsLoading);
	const view = useSelector(selectArticlesPageView);
	const [searchParams] = useSearchParams();

	useInitialEffect(useCallback(() => {
		void dispatch(initArticlesPage(searchParams));
	}, [dispatch, searchParams]));

	const handleNextPartLoad = useCallback(() => {
		void dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames([module.articlesPage, className])}>
				<ArticlesPageFilters/>
				<ArticleVirtualizedList
					articles={articles}
					hasMore={hasMore}
					view={view}
					fetchNextPage={handleNextPartLoad}
					isLoading={isLoading}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticlesPage;
