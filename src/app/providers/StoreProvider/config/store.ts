import type {CombinedState, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {configureStore} from '@reduxjs/toolkit';
import type {StateScheme} from './StateScheme';
import {userReducer} from 'entities/User';
import {createReducerManager} from './reducerManager';
import {$api} from 'shared/api/api';
import {restorationScrollReducer} from 'features/RestorationScroll';
import {rtkApi} from 'shared/api/rtkApi';

export const createReduxStore = (
	initialState?: StateScheme,
	asyncReducers?: ReducersMapObject<StateScheme>,
) => {
	const rootReducers: ReducersMapObject<StateScheme> = {
		...asyncReducers,
		user: userReducer,
		restorationScroll: restorationScrollReducer,
		[rtkApi.reducerPath]: rtkApi.reducer,
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
				},
			},
		}).concat(rtkApi.middleware),
	});

	return Object.assign(store, {reducerManager});
};
