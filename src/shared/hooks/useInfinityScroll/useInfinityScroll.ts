import type {MutableRefObject} from 'react';
import {useEffect, useRef} from 'react';

export interface UseInfinityScrollProps {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({wrapperRef, triggerRef, callback}: UseInfinityScrollProps) => {
	const observer = useRef<IntersectionObserver | undefined>();

	useEffect(() => {
		const currentTrigger = triggerRef.current;
		const currentWrapper = wrapperRef.current;

		if (callback) {
			const options = {
				root: currentWrapper,
				rootMargin: '0px',
				threshold: 1.0,
			};

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.current.observe(currentTrigger);
		}

		return () => {
			if (observer.current) {
				observer.current.unobserve(currentTrigger);
			}
		};
	}, [wrapperRef, callback, triggerRef]);
};
