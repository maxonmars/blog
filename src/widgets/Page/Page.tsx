import module from './Page.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {MutableRefObject, ReactNode, UIEvent} from 'react';
import {useCallback, useRef} from 'react';
import {useInfinityScroll} from '@/shared/hooks/useInfinityScroll/useInfinityScroll';
import {useAppDispatch, useAppSelector} from '@/shared/hooks';
import {restorationScrollActions, selectRestorationScrollByPath} from '@/features/RestorationScroll';
import {useLocation} from 'react-router-dom';
import {useInitialEffect} from '@/shared/hooks/useInitialEffect/useInitialEffect';
import {useThrottle} from '@/shared/hooks/useThrottle/useThrottle';

interface PageProps {
	className?: string;
	children: ReactNode;
	onScrollEnd?: () => void;
}

export const Page = ({className, children, onScrollEnd}: PageProps) => {
	const dispatch = useAppDispatch();

	const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
	const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

	const {pathname} = useLocation();

	const scrollPosition = useAppSelector(state => selectRestorationScrollByPath(state, pathname));

	useInitialEffect(useCallback(() => {
		wrapperRef.current.scrollTop = scrollPosition;
	}, [scrollPosition]));

	useInfinityScroll({wrapperRef, triggerRef, callback: onScrollEnd});

	const handleScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
		dispatch(restorationScrollActions.setScrollPosition(
			{
				position: e.currentTarget.scrollTop,
				path: pathname,
			}));
	}, 500);

	return (
		<div
			ref={wrapperRef}
			className={classNames([module.page, className])}
			onScroll={handleScroll}>
			{children}
			{onScrollEnd ? <div className={module.trigger} ref={triggerRef}/> : null}
		</div>
	);
};
