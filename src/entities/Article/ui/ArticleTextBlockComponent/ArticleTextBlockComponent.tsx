import module from './ArticleTextBlockComponent.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {ArticleTextBlock} from '../../model/types/article';
import {Title} from '@/shared/ui/Title';
import {Text} from '@/shared/ui/Text';

interface ArticleTextBlockComponentProps {
	className?: string;
	block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = ({className, block}: ArticleTextBlockComponentProps) => {
	const {type, id, title, paragraphs} = block;
	return (
		<div className={classNames([module.articleTextBlockComponent, className])}>
			{title && <Title order={3}>{title}</Title>}
			{paragraphs.map((paragraph, index) => {
				return (
					<Text key={index}>{paragraph}</Text>
				);
			})}
		</div>
	);
};
