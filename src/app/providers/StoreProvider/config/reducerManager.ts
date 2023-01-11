import type {AnyAction, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {combineReducers} from '@reduxjs/toolkit';
import type {ReducerManager, StateScheme, StateSchemeKey} from '@/app/providers/StoreProvider/config/StateScheme';

export function createReducerManager(initialReducers: ReducersMapObject<StateScheme>): ReducerManager {
	// Create an object which maps keys to reducers
	const reducers = {...initialReducers};

	// Create the initial combinedReducer
	let combinedReducer = combineReducers(reducers);

	// An array which is used to delete state keys when reducers are removed
	let keysToRemove: StateSchemeKey[] = [];

	return {
		getReducerMap: () => reducers,

		// The root reducer function exposed by this object
		// This will be passed to the store
		reduce(state: StateScheme, action: AnyAction) {
			// If any reducers have been removed, clean up their state first
			if (keysToRemove.length > 0) {
				state = {...state};
				for (const key of keysToRemove) {
					// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
					delete state[key];
				}

				keysToRemove = [];
			}

			// Delegate to the combined reducer
			return combinedReducer(state, action);
		},

		// Adds a new reducer with the specified key
		add(key: StateSchemeKey, reducer: Reducer) {
			if (!key || reducers[key]) {
				return;
			}

			// Add the reducer to the reducer mapping
			reducers[key] = reducer;

			// Generate a new combined reducer
			combinedReducer = combineReducers(reducers);
		},

		// Removes a reducer with the specified key
		remove(key: StateSchemeKey) {
			if (!key || !reducers[key]) {
				return;
			}

			// Remove it from the reducer mapping
			// eslint-disable-next-line @typescript-eslint/no-dynamic-delete
			delete reducers[key];

			// Add the key to the list of keys to clean up
			keysToRemove.push(key);

			// Generate a new combined reducer
			combinedReducer = combineReducers(reducers);
		},
	};
}
