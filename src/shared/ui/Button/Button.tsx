import module from './Button.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ButtonHTMLAttributes, ForwardedRef, ReactNode} from 'react';
import {forwardRef, memo} from 'react';

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

const Button = ({
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
}: ButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
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
			ref={ref}
			{...restProps}
			className={buttonClass}
		>
			{children}
		</button>
	);
};

const ButtonWithRef = forwardRef<HTMLButtonElement, ButtonProps>(Button);
const ButtonWithMemo = memo(ButtonWithRef);
export {ButtonWithMemo as Button};
