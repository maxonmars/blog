import module from './Button.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ButtonHTMLAttributes, FC} from 'react';

export enum ButtonTheme {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	theme?: ButtonTheme;
}

export const Button: FC<ButtonProps> = ({className, theme, children, ...restProps}) => (
	<button {...restProps} className={classNames([module.button, className, module[theme]])}>
		{children}
	</button>
);
