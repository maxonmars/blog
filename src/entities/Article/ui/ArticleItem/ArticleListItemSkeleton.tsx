import module from './ArticleListItem.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Card} from '@/shared/ui/Card/Card';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {ArticleView} from '../../model/consts/article';

interface ArticleListItemProps {
	className?: string;
	view: ArticleView;
}

export const ArticleListItemSkeleton = ({className, view}: ArticleListItemProps) => {
	// TODO: взять для текстовых скелетонов высоту шрифта
	if (view === ArticleView.LIST) {
		return (
			<Card className={classNames([module.articleListItem, className, module[view]])}>
				<div className={module.userInfo}>
					<Skeleton height={50} width={50} borderRadius="50%"/>
					<Skeleton height={16} width={150}/>
				</div>
				<Skeleton className={module.coverDate} height={16} width={100}/>
				<Skeleton className={module.articleTitle} height={24} width={220}/>
				<Skeleton className={module.articleTypes} height={16} width={220}/>
				<Skeleton className={module.coverImage} height={200} width="100%"/>
				<Skeleton className={module.coverImage} height={100} width="100%"/>
				<Skeleton className={module.readBtn} height={36} width={128} borderRadius="8px"/>
				<div className={module.viewsCounter}>
					<Skeleton height={20} width={64}/>
					<Skeleton height={20} width={20}/>
				</div>
			</Card>
		);
	}

	return (
		<Card
			className={classNames([module.articleListItem, className, module[view], module.skeleton])}>
			<Skeleton className={module.cover} height={200} width="100%"/>
			<Skeleton className={module.articleTypes} height={16} width={96}/>
			<Skeleton className={module.viewsCounter} height={16} width={64}/>
			<Skeleton className={module.articleTitle} height={24} width="100%"/>
		</Card>
	);
};
