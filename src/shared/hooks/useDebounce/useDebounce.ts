import {useCallback, useRef} from 'react';

/**
 * Хук, который позволяет отменять предыдущий вызов функции пока не истечет delay
 * @param callback
 * @param delay - задержка в мс
 */

export const useDebounce = (callback: () => void, delay: number) => {
	const timer = useRef<ReturnType<typeof setTimeout>>();

	return useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		timer.current = setTimeout(() => {
			callback();
		}, delay);
	}, [delay, callback]);
};
