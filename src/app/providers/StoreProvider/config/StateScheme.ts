import type {UserScheme} from 'entities/User';
import type {LoginScheme} from 'features/AuthByUsername';
import type {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import type {ProfileScheme} from 'entities/Profile';
import type {AxiosInstance} from 'axios';
import type {ArticleDetailsScheme} from 'entities/Article';
import type {ArticleDetailsCommentsScheme} from 'pages/ArticleDetailsPage';
import type {AddCommentFormScheme} from 'features/AddCommentForm';
import type {ArticlesPageScheme} from 'pages/ArticlesPage';
import type {RestorationScrollScheme} from 'features/RestorationScroll';

export interface StateScheme {
	user: UserScheme;
	restorationScroll: RestorationScrollScheme;

	// Async reducers
	login?: LoginScheme;
	profile?: ProfileScheme;
	articleDetails?: ArticleDetailsScheme;
	articleDetailsComments?: ArticleDetailsCommentsScheme;
	addCommentForm?: AddCommentFormScheme;
	articlesPage?: ArticlesPageScheme;
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
}

export interface ThunkConfig<T> {
	rejectValue: T;
	extra: ThunkExtraArg;
	state: StateScheme;
}
