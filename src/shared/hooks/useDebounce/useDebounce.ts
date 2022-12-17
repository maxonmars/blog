import {useCallback, useRef} from 'react';

export const useDebounce = (collback: () => void, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();

	return useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			collback();
		}, delay);
	}, [delay, collback]);
};
