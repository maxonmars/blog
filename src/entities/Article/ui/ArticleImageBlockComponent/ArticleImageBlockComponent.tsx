import module from './ArticleImageBlockComponent.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {ArticleImageBlock} from '../../model/types/article';

interface ArticleImageBlockComponentProps {
	className?: string;
	block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = ({className, block}: ArticleImageBlockComponentProps) => {
	const {src, title} = block;
	return (
		<div className={classNames([module.articleImageBlockComponent, className])}>
			<figure className="sign">
				<img className={module.image} src={src} alt={title ?? 'изображение'}/>
				{title && <figcaption className={module.caption}>{title}</figcaption>}
			</figure>
		</div>
	);
};
