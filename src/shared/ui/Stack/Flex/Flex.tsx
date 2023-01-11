import module from './Flex.module.css';
import type {ClassNamesMods} from '@/shared/lib/classNames/classNames';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';
export type FlexAlign = 'start' | 'center' | 'end';
export type FlexDirection = 'row' | 'column';
export type FlexGap = '0.25' | '0.5' | '1' | '1.5' | '2';

const justifyClasses: Record<FlexJustify, string> = {
	start: module.justifyStart,
	center: module.justifyCenter,
	end: module.justifyEnd,
	between: module.justifyBetween,
};

const alignClasses: Record<FlexAlign, string> = {
	start: module.alignStart,
	center: module.alignCenter,
	end: module.alignEnd,
};

const directionClasses: Record<FlexDirection, string> = {
	row: module.directionRow,
	column: module.directionColumn,
};

const gapClasses: Record<FlexGap, string> = {
	0.25: module.gap025,
	0.5: module.gap05,
	1: module.gap1,
	1.5: module.gap15,
	2: module.gap2,
};

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface FlexProps extends DivProps {
	className?: string;
	children: ReactNode;
	justify?: FlexJustify;
	align?: FlexAlign;
	direction: FlexDirection;
	gap?: FlexGap;
	isMax?: boolean;
}

export const Flex = (props: FlexProps) => {
	const {
		className,
		children,
		justify = 'start',
		align = 'center',
		direction = 'row',
		gap,
		isMax,
	} = props;

	const classes = [
		className,
		justifyClasses[justify],
		alignClasses[align],
		directionClasses[direction],
		gap && gapClasses[gap],
	];

	const mods: ClassNamesMods = {
		[module.max]: isMax,
	};

	return (
		<div className={classNames([module.flex, ...classes], mods)}>
			{children}
		</div>
	);
};
