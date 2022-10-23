import type {ReducersMapObject} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import type {StateScheme} from './StateScheme';
import {userReducer} from 'entities/User';

export const createReduxStore = (initialState: StateScheme) => {
	const rootReducers: ReducersMapObject<StateScheme> = {
		user: userReducer,
	};
	return configureStore<StateScheme>({
		reducer: rootReducers,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});
};
