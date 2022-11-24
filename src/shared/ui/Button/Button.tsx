import module from './Button.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ButtonHTMLAttributes, ReactNode} from 'react';
import {memo} from 'react';

export enum ButtonVariant {
	SUBTLE = 'subtle',
	OUTLINE = 'outline',
	DEFAULT = 'default',
	FILLED = 'filled',
}

export enum ButtonSize {
	SM = 'sm',
	MD = 'md',
	LG = 'lg',
}

export enum ButtonRadius {
	SM = 'radiusSm',
	MD = 'radiusMd',
	LG = 'radiusLg',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
	square?: boolean;
	size?: ButtonSize;
	radius?: ButtonRadius;
	uppercase?: boolean;
	compact?: boolean;
	inverted?: boolean;
	children: ReactNode;
}

export const Button = memo(({
	className,
	variant = ButtonVariant.DEFAULT,
	square,
	size = ButtonSize.MD,
	radius = ButtonRadius.MD,
	compact,
	inverted,
	uppercase,
	children,
	...restProps
}: ButtonProps) => {
	const buttonClass = classNames(
		[
			module.button,
			className,
			module[variant],
			module[size],
			module[radius],
		],
		{
			[module.square]: square,
			[module.uppercase]: uppercase,
			[module.compact]: compact,
			[module.inverted]: inverted,
		},
	);

	return (
		<button
			{...restProps}
			className={buttonClass}
		>
			{children}
		</button>
	);
});

Button.displayName = 'Button';
