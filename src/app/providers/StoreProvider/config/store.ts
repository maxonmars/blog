import {configureStore} from '@reduxjs/toolkit';
import type {StateScheme} from './StateScheme';

export const createReduxStore = (initialState: StateScheme) => {
	return configureStore<StateScheme>({
		reducer: {},
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
