import {useCallback, useMemo, useState} from 'react';

// [isHover, bindHover] = useHover();
// <div {...bindHover} />
export const useHover = () => {
	const [isHover, setIsHover] = useState(false);

	const onMouseEnter = useCallback(() => {
		setIsHover(true);
	}, []);
	const onMouseLeave = useCallback(() => {
		setIsHover(false);
	}, []);

	return useMemo(() => {
		return [
			isHover,
			{
				onMouseEnter,
				onMouseLeave,
			},
		];
	}, [onMouseEnter, onMouseLeave, isHover]);
};
