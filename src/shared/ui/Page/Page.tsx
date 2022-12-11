import module from './Page.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {MutableRefObject, ReactNode} from 'react';
import {useCallback, useRef} from 'react';
import {useInfinityScroll} from 'shared/hooks/useInfinityScroll/useInfinityScroll';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = ({className, children, onScrollEnd}: PageProps) => {
	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	const logger = useCallback(() => {
		console.log('LOGGER');
	}, []);

	useInfinityScroll({wrapperRef, triggerRef, callback: onScrollEnd});

	return (
		<div ref={wrapperRef} className={classNames([module.page, className])}>
			{children}
			<div ref={triggerRef}/>
		</div>
	);
};
