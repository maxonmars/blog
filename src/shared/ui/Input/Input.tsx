import module from './Input.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ChangeEvent, InputHTMLAttributes} from 'react';
import {memo} from 'react';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

interface InputProps extends HTMLInputProps {
	className?: string;
	onChange?: (value: string, name: string) => void;
	label?: string;
}

export const Input = memo(({className, onChange, label, name, ...props}: InputProps) => {
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value, e.target.name);
	};

	const id = label && name ? {id: `input-${name}`} : {};

	const wrapperClass = classNames(
		[module.wrapper, className],
		{
			[module.readOnly]: props.readOnly,
			[module.withLabel]: Boolean(label),
		});

	return (
		<div className={wrapperClass}>
			{label && name && <label className={module.label} htmlFor={`input-${name}`}>{`${label}:`}</label>}
			<input
				{...props}
				{...id}
				name={name}
				className={module.input}
				onChange={handleChange}
			/>
		</div>
	);
});

Input.displayName = 'Input';
