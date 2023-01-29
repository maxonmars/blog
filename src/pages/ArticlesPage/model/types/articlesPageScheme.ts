import type {Article, ArticleSortField, ArticleType, ArticleView} from '@/entities/Article';
import type {SortOrder} from '@/shared/types';
import type {EntityState} from '@reduxjs/toolkit';

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
