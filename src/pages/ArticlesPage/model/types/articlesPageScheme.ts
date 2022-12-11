import type {EntityState} from '@reduxjs/toolkit';
import type {Article} from 'entities/Article';
import type {ArticleView} from 'entities/Article';

export interface ArticlesPageScheme extends EntityState<Article> {
	isLoading?: boolean;
	error?: string;
	view: ArticleView;
}
