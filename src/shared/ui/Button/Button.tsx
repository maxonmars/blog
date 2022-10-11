import module from './Button.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ButtonHTMLAttributes, FC} from 'react';

export enum ButtonVariant {
	SUBTLE = 'subtle',
	OUTLINE = 'outline',
	DEFAULT = 'default',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	variant?: ButtonVariant;
}

export const Button: FC<ButtonProps> = ({
	className,
	variant = ButtonVariant.DEFAULT,
	children,
	...restProps
}) => (
	<button {...restProps} className={classNames([module.button, className, module[variant]])}>
		{children}
	</button>
);
