import module from './Dropdown.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Menu} from '@headlessui/react';
import type {ReactNode} from 'react';
import {AppLink} from '../AppLink/AppLink';
import {flip, offset, useFloating} from '@floating-ui/react';
import type {Placement} from '@floating-ui/core/src/types';

export interface DropdownItem {
	disabled?: boolean;
	content?: ReactNode;
	onClick?: () => void;
	href?: string;
}

interface DropdownProps {
	className?: string;
	items: DropdownItem[];
	trigger: ReactNode;
	placement?: Placement;
}

export const Dropdown = ({className, trigger, items, placement = 'bottom-start'}: DropdownProps) => {
	const {x, y, reference, floating, strategy} = useFloating({
		placement,
		middleware: [
			offset(5),
			flip(),
		],
	});

	return (
		<Menu as="div" className={classNames([module.dropdown, className])}>
			<Menu.Button className={module.btn} ref={reference}>
				{trigger}
			</Menu.Button>
			<Menu.Items
				className={classNames([module.menu])}
				ref={floating}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
				}}>
				{items.map((item, index) => {
					if (item.href) {
						return (
							<Menu.Item
								as={AppLink}
								className={module.item}
								key={index}
								to={item.href}
								disabled={item.disabled}>
								{item.content}
							</Menu.Item>
						);
					}

					return (
						<Menu.Item
							as="button"
							className={module.item}
							onClick={item.onClick}
							key={index}
							disabled={item.disabled}>
							{item.content}
						</Menu.Item>
					);
				})}
			</Menu.Items>
		</Menu>
	);
};
