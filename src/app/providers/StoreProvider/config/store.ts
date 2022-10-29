import type {ReducersMapObject} from '@reduxjs/toolkit';
import {configureStore, DeepPartial} from '@reduxjs/toolkit';
import type {StateScheme} from './StateScheme';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';

export const createReduxStore = (initialState?: StateScheme, asyncReducers?: ReducersMapObject<StateScheme>) => {
	const rootReducers: ReducersMapObject<StateScheme> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore<StateScheme>({
		reducer: reducerManager.reduce,
		devTools: __IS_DEV__,
		preloadedState: initialState,
	});

	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};
