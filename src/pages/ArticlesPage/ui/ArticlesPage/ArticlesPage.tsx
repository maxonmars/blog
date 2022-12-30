import module from './ArticlesPage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/hooks';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useCallback} from 'react';
import {initArticlesPage} from '../../model/services/initArticlesPage/initArticlesPage';
import {ArticlesPageFilters} from '../ArticlesPageFilters/ArticlesPageFilters';
import {useSearchParams} from 'react-router-dom';
import {ArticleVirtualizedList} from '../ArticleVirtualizedList/ArticleVirtualizedList';
import {articleListPageReducer} from '../../model/slice';

interface ArticlesPageProps {
	className?: string;
}

const reducers: ReducersList = {
	articleListPage: articleListPageReducer,
};

const ArticlesPage = ({className}: ArticlesPageProps) => {
	const dispatch = useAppDispatch();
	const [searchParams] = useSearchParams();

	useInitialEffect(useCallback(() => {
		void dispatch(initArticlesPage(searchParams));
	}, [dispatch, searchParams]));

	return (
		<DynamicModuleLoader reducers={reducers}>
			<div className={classNames([module.articlesPage, className])}>
				<ArticlesPageFilters/>
				<ArticleVirtualizedList/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ArticlesPage;
