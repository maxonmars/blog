import module from './ArticleCodeBlockComponent.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ArticleCodeBlock} from '../../model/types/article';
import {Code} from 'shared/ui/Code/Code';

interface ArticleCodeBlockComponentProps {
	className?: string;
	block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = ({className, block}: ArticleCodeBlockComponentProps) => {
	const {code} = block;
	return (
		<div className={classNames([module.ArticleCodeBlockComponent, className])}>
			<Code>{code}</Code>
		</div>
	);
};
