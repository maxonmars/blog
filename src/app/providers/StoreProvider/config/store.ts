import type {CombinedState, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import type {StateScheme} from './StateScheme';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';
import {$api} from 'shared/api/api';
import type {To} from '@remix-run/router';
import type {NavigateOptions} from 'react-router/dist/lib/context';

export const createReduxStore = (
	initialState?: StateScheme,
	asyncReducers?: ReducersMapObject<StateScheme>,
	navigate?: (to: To, options?: NavigateOptions) => void,
) => {
	const rootReducers: ReducersMapObject<StateScheme> = {
		...asyncReducers,
		user: userReducer,
	};

	const reducerManager = createReducerManager(rootReducers);

	const store = configureStore({
		reducer: reducerManager.reduce as Reducer<CombinedState<StateScheme>>,
		devTools: __IS_DEV__,
		preloadedState: initialState,
		middleware: getDefaultMiddleware => getDefaultMiddleware({
			thunk: {
				extraArgument: {
					api: $api,
					navigate,
				},
			},
		}),
	});

	// @ts-expect-error
	store.reducerManager = reducerManager;

	return store;
};
