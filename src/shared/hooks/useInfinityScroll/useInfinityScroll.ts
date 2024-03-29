import type {MutableRefObject} from 'react';
import {useEffect, useRef} from 'react';

interface UseInfinityScrollOptions {
	callback?: () => void;
	triggerRef: MutableRefObject<HTMLElement>;
	wrapperRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({callback, wrapperRef, triggerRef}: UseInfinityScrollOptions) => {
	const observer = useRef<IntersectionObserver | undefined>();

	useEffect(() => {
		const wrapperElement = wrapperRef.current;
		const triggerElement = triggerRef.current;

		if (callback) {
			const options = {
				root: wrapperElement,
				rootMargin: '0px',
				threshold: 1.0,
			};

			observer.current = new IntersectionObserver(([entry]) => {
				if (entry.isIntersecting) {
					callback();
				}
			}, options);

			observer.current.observe(triggerElement);
		}

		return () => {
			if (observer.current && triggerElement) {
				observer.current.unobserve(triggerElement);
			}
		};
	}, [callback, triggerRef, wrapperRef]);
};
