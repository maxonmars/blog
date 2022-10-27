import module from './Text.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ReactNode} from 'react';

export enum TextVariant {
	DEFAULT = 'default',
	RED = 'red',
}

export enum TextSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}

interface TextProps {
	className?: string;
	children: ReactNode;
	variant?: TextVariant;
	size?: TextSize;
}

export const Text = ({className, children, variant = TextVariant.DEFAULT, size = TextSize.MD}: TextProps) => {
	return (
		<p className={classNames([module.text, className, module[variant], module[size]])}>
			{children}
		</p>
	);
};
