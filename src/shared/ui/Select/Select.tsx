import module from './Select.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ChangeEvent, SelectHTMLAttributes} from 'react';

export interface SelectOption {
	label: string;
	value: string;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value' | 'className'>;

interface SelectProps extends HTMLSelectProps {
	className?: string;
	options: SelectOption[];
	label?: string;
	selectedValue?: string;
	onChange: (value: string) => void;
}

export const Select = ({className, options, label, selectedValue, onChange, ...restProps}: SelectProps) => {
	const optionsList = options.map(opt => {
		return (
			<option key={opt.value} value={opt.value}>
				{opt.label}
			</option>
		);
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value);
	};

	return (
		<div className={classNames([module.wrapper, className])}>
			{label && <label>{`${label}:`}</label>}
			<select {...restProps} value={selectedValue} onChange={handleChange} className={module.select}>
				{optionsList}
			</select>
		</div>
	);
};
