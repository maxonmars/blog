import module from './Input.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ChangeEvent, InputHTMLAttributes} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string;
	onChange?: (value: string) => void;
}

export const Input = ({className, onChange, value, ...inputProps}: InputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
	};

	return (
		<input
			className={classNames([module.input, className])}
			{...inputProps} value={value} onChange={handleChange}/>
	);
};
