import module from './Input.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ChangeEvent, InputHTMLAttributes} from 'react';
import {memo} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	onChange?: (value: string, name: string) => void;
}

export const Input = memo(({className, onChange, ...inputProps}: InputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value, e.target.name);
	};

	return (
		<input
			className={classNames([module.input, className])}
			{...inputProps} onChange={handleChange}/>
	);
});

Input.displayName = 'Input';
