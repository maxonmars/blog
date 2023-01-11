import module from './Skeleton.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {CSSProperties} from 'react';

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	borderRadius?: string;
}

export const Skeleton = ({className, width, height, borderRadius}: SkeletonProps) => {
	const styles: CSSProperties = {
		width,
		height,
		borderRadius,
	};
	return (
		<div
			className={classNames([module.skeleton, className])}
			style={styles}/>
	);
};
