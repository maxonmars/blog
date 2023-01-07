import module from './Popover.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {Popover as HPopover} from '@headlessui/react';
import type {ReactNode} from 'react';
import {flip, offset, useFloating} from '@floating-ui/react';
import type {Placement} from '@floating-ui/core/src/types';

interface PopoverProps {
	className?: string;
	children: ReactNode;
	trigger: ReactNode;
	placement?: Placement;
}

export const Popover = ({className, trigger, children, placement = 'bottom-start'}: PopoverProps) => {
	const {x, y, reference, floating, strategy} = useFloating({
		placement,
		middleware: [
			offset(5),
			flip(),
		],
	});

	return (
		<HPopover className={classNames([module.popover, className])}>
			<HPopover.Button
				ref={reference}
				className={module.triggerBtn}>
				{trigger}
			</HPopover.Button>

			<HPopover.Panel
				ref={floating}
				className={module.panel}
				style={{
					position: strategy,
					top: y ?? 0,
					left: x ?? 0,
				}}>
				{children}
			</HPopover.Panel>
		</HPopover>
	);
};
