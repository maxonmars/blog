import module from './Title.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ReactNode} from 'react';
import {memo} from 'react';

export type TitleOrder = 1 | 2 | 3 | 4;

interface TitleProps {
	className?: string;
	children: ReactNode;
	order?: TitleOrder;
}

type HeaderTag = 'h1' | 'h2' | 'h3' | 'h4';

const mapHeaderTag: Record<TitleOrder, HeaderTag> = {
	1: 'h1',
	2: 'h2',
	3: 'h3',
	4: 'h4',
};

export const Title = memo(({className, children, order = 1}: TitleProps) => {
	const titleClass = classNames([module.title, className]);

	const HeaderTag = mapHeaderTag[order];

	return (
		<HeaderTag className={titleClass}>
			{children}
		</HeaderTag>
	);
});

Title.displayName = 'Title';
