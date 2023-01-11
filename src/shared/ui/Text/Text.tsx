import module from './Text.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {HTMLAttributes, ReactNode} from 'react';

export enum TextVariant {
	DEFAULT = 'default',
	RED = 'red',
}

export enum TextSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}

type Paragraph = Omit<HTMLAttributes<HTMLParagraphElement>, 'className' | 'children'>;

interface TextProps extends Paragraph {
	className?: string;
	children: ReactNode;
	variant?: TextVariant;
	size?: TextSize;
}

export const Text = ({className, children, variant = TextVariant.DEFAULT, size = TextSize.MD, ...restProps}: TextProps) => {
	return (
		<p {...restProps} className={classNames([module.text, className, module[variant], module[size]])}>
			{children}
		</p>
	);
};
