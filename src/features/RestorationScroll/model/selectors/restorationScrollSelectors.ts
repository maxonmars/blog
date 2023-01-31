import type {StateScheme} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';

export const selectRestorationScroll = (state: StateScheme) => {
	return state.restorationScroll.scroll;
};

export const selectRestorationScrollByPath = createSelector(
	selectRestorationScroll,
	(state: StateScheme, path: string) => path,
	(scroll, path) => scroll[path] ?? 0,
);
