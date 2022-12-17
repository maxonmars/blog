import module from './Select.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {ChangeEvent, SelectHTMLAttributes} from 'react';
import {typedMemo} from 'shared/lib/typedMemo/typedMemo';

export interface SelectOption<T extends string> {
	label: string;
	value: T;
}

type HTMLSelectProps = Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value' | 'className'>;

interface SelectProps<T extends string> extends HTMLSelectProps {
	className?: string;
	options: Array<SelectOption<T>>;
	label?: string;
	selectedValue?: T;
	onChange: (value: T) => void;
}

export const Select = typedMemo(<T extends string>({className, options, label, selectedValue, onChange, ...restProps}: SelectProps<T>) => {
	const optionsList = options.map(opt => {
		return (
			<option key={opt.value} value={opt.value}>
				{opt.label}
			</option>
		);
	});

	const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
		onChange(e.target.value as T);
	};

	return (
		<div className={classNames([module.wrapper, className])}>
			{label && <label>{`${label}:`}</label>}
			<select {...restProps} value={selectedValue} onChange={handleChange} className={module.select}>
				{optionsList}
			</select>
		</div>
	);
});
