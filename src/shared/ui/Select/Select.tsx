import type {ReactNode} from 'react';
import {Fragment} from 'react';
import {Listbox} from '@headlessui/react';
import {classNames} from '@/shared/lib/classNames/classNames';
import module from './Select.module.css';
import {IcoThinBadgeCheck} from '@/shared/assets/icons';
import {Button, ButtonRadius, ButtonSize, ButtonVariant} from '../Button/Button';
import {flip, FloatingPortal, offset, useFloating} from '@floating-ui/react';
import {typedMemo} from '@/shared/lib/typedMemo/typedMemo';
import type {Placement} from '@floating-ui/core/src/types';

export interface SelectOption<T> {
	value: T;
	content: ReactNode;
	isDisabled?: boolean;
}

interface SelectProps<T> {
	className?: string;
	options: Array<SelectOption<T>>;
	selectedValue?: T;
	onChange: (value: T) => void;
	placeholder?: string;
	label?: string;
	isDisabled?: boolean;
	placement?: Placement;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
	const {
		className,
		onChange, selectedValue,
		options,
		label,
		placeholder,
		isDisabled,
		placement = 'bottom-start',
	} = props;

	const {x, y, reference, floating, strategy} = useFloating({
		placement,
		middleware: [
			offset(5),
			flip(),
		],
	});

	return (
		<Listbox
			disabled={isDisabled}
			as="div"
			value={selectedValue}
			onChange={onChange}
			className={classNames([module.listBox, className])}>
			{label && <Listbox.Label className={module.label}>{label}:</Listbox.Label>}
			<Listbox.Button
				as={Button}
				ref={reference}
				disabled={isDisabled}
				variant={ButtonVariant.FILLED}
				size={ButtonSize.SM}
				radius={ButtonRadius.SM}>
				{selectedValue ?? placeholder}
			</Listbox.Button>
			<FloatingPortal>
				<Listbox.Options className={module.options} style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
				}} ref={floating}>
					{options?.map(option => (
						<Listbox.Option
							as={Fragment}
							key={option.value}
							value={option.value}
							disabled={option.isDisabled}
						>
							{({active, selected, disabled}) => (
								<li className={classNames([module.item],
									{[module.itemActive]: active, [module.itemDisabled]: disabled})}>
									{selected && <IcoThinBadgeCheck width={20}/>}
									{option.content}
								</li>
							)}
						</Listbox.Option>
					))}
				</Listbox.Options>
			</FloatingPortal>
		</Listbox>
	);
});
