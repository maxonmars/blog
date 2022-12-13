import module from './ArticlesPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ArticleView} from 'entities/Article';
import {ArticleList} from 'entities/Article';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	articlesPageActions,
	articlesPageReducer,
	selectArticles,
} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/hooks';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from '../../model/selectors/articlesPageSelectors';
import {ArticleViewSelector} from 'features/ArticleViewSelector/ui/ArticleViewSelector';
import {ARTICLES_VIEW_STORAGE_KEY} from 'shared/const/localStorage';
import {Page} from 'shared/ui/Page/Page';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articlesPage: articlesPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const articles = useSelector(selectArticles.selectAll);
	const isLoading = useSelector(selectArticlesPageIsLoading);
	const view = useSelector(selectArticlesPageView);

	useInitialEffect(useCallback(() => {
		void dispatch(initArticlesPage());
	}, [dispatch]));

	const handleViewChange = (view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
		localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, view);
	};

	const handleNextPartLoad = useCallback(() => {
		void dispatch(fetchNextArticlesPage());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers}>
			<Page onScrollEnd={handleNextPartLoad}>
				<div className={classNames([module.articlesPage, className])}>
					<ArticleViewSelector onViewChange={handleViewChange} view={view}/>
					<ArticleList articles={articles} isLoading={isLoading} view={view}/>
				</div>
			</Page>
		</DynamicModuleLoader>
	);
};

export default ArticlesPage;
