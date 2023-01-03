import type {EntityState} from '@reduxjs/toolkit';
import type {Article} from 'entities/Article';
import type {ArticleView} from 'entities/Article';
import type {SortOrder} from 'shared/types';
import type {ArticleSortField} from 'entities/Article';
import type {ArticleType} from 'entities/Article/model/consts/article';

export interface ArticlesPageScheme extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	_isInit: boolean;
	// pagination
	page: number;
	limit: number;
	hasMore: boolean;
	// filters
	view: ArticleView;
	order: SortOrder;
	sort: ArticleSortField;
	search: string;
	type: ArticleType;
}
