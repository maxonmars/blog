import module from './Title.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ReactNode} from 'react';
import {memo} from 'react';

export type TitleOrder = 1 | 2 | 3;

interface TitleProps {
	className?: string;
	children: ReactNode;
	order?: TitleOrder;
}

export const Title = memo(({className, children, order}: TitleProps) => {
	const titleClass = classNames([module.title, className]);

	switch (order) {
		case 1: {
			return <h1 className={titleClass}>{children}</h1>;
		}

		case 2: {
			return <h2 className={titleClass}>{children}</h2>;
		}

		case 3: {
			return <h3 className={titleClass}>{children}</h3>;
		}

		default: {
			return <h1 className={titleClass}>{children}</h1>;
		}
	}
});

Title.displayName = 'Title';
