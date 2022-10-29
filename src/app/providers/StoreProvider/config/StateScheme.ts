import type {UserScheme} from 'entities/User';
import type {LoginScheme} from 'features/AuthByUsername';
import type {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';

export interface StateScheme {
	user: UserScheme;

	// Async reducers
	login?: LoginScheme;
}

export type StateSchemeKey = keyof StateScheme;

export interface ReducerManager {
	getReducerMap(): ReducersMapObject<StateScheme>;
	reduce(state: StateScheme, action: AnyAction): CombinedState<StateScheme>;
	add(key: StateSchemeKey, reducer: Reducer): void;
	remove(key: StateSchemeKey): void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateScheme> {
	reducerManager: ReducerManager;
}
