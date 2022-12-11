import module from './Card.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {HTMLAttributes, ReactNode} from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
}

export const Card = ({className, children, ...restProps}: CardProps) => {
	return (
		<div {...restProps} className={classNames([module.card, className])}>
			{children}
		</div>
	);
};
