import type {ArticlesPageScheme} from './articlesPageScheme';
import type {ArticleVirtualizedListScheme} from './articleVirtualizedListScheme';

export interface ArticleListPageScheme {
	pages: ArticlesPageScheme;
	virtualizedList: ArticleVirtualizedListScheme;
}
