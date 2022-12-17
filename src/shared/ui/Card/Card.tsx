import module from './Card.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {HTMLAttributes, ReactNode} from 'react';

export enum CardVariant {
	DEFAULT = 'default',
	OUTLINE = 'outline',
}
interface CardProps extends HTMLAttributes<HTMLDivElement> {
	className?: string;
	children: ReactNode;
	variant?: CardVariant;
}

export const Card = ({className, children, variant = CardVariant.DEFAULT, ...restProps}: CardProps) => {
	return (
		<div {...restProps} className={classNames([module.card, className, module[variant]])}>
			{children}
		</div>
	);
};
