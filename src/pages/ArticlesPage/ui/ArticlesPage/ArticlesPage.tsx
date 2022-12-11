import module from './ArticlesPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {Article, ArticleView} from 'entities/Article';
import {ArticleList} from 'entities/Article';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
	articlesPageActions,
	articlesPageReducer,
	selectArticles,
} from 'pages/ArticlesPage/model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/hooks';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useCallback} from 'react';
import {fetchArticlesList} from 'pages/ArticlesPage/model/services/fetchArticlesList';
import {useSelector} from 'react-redux';
import {
	selectArticlesPageError,
	selectArticlesPageIsLoading,
	selectArticlesPageView,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import {ArticleViewSelector} from 'features/ArticleViewSelector/ui/ArticleViewSelector';
import {ARTICLES_VIEW_STORAGE_KEY} from 'shared/const/localStorage';

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
	const error = useSelector(selectArticlesPageError);
	const view = useSelector(selectArticlesPageView);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchArticlesList());
	}, [dispatch]));

	const handleViewChange = (view: ArticleView) => {
		dispatch(articlesPageActions.setView(view));
		localStorage.setItem(ARTICLES_VIEW_STORAGE_KEY, view);
	};

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames([module.articlesPage, className])}>
				<ArticleViewSelector onViewChange={handleViewChange} view={view}/>
				<ArticleList articles={articles} isLoading={isLoading} view={view}/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticlesPage;
