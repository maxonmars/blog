import type {UserScheme} from 'entities/User';
import type {LoginScheme} from 'features/AuthByUsername';
import type {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import type {ProfileScheme} from 'entities/Profile';
import type {AxiosInstance} from 'axios';
import type {To} from '@remix-run/router';
import type {NavigateOptions} from 'react-router/dist/lib/context';
import type {ArticleDetailsScheme} from 'entities/Article';
import type {ArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage';

export interface StateScheme {
	user: UserScheme;

	// Async reducers
	login?: LoginScheme;
	profile?: ProfileScheme;
	articleDetails?: ArticleDetailsScheme;
	articleDetailsComments?: ArticleDetailsCommentsSchema;
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

interface ThunkExtraArg {
	api: AxiosInstance;
	navigate?: (to: To, options?: NavigateOptions) => void;
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateScheme;
}
