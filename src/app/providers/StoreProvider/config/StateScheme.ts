import type {UserScheme} from 'entities/User';
import type {LoginScheme} from 'features/AuthByUsername';
import type {AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import type {AxiosInstance} from 'axios';
import type {ArticleDetailsScheme} from 'entities/Article';
import type {ArticleDetailsPageScheme} from 'pages/ArticleDetailsPage';
import type {ArticleListPageScheme} from 'pages/ArticlesPage';
import type {RestorationScrollScheme} from 'features/RestorationScroll';
import type {AddCommentFormScheme} from 'features/addCommentForm';
import type {rtkApi} from 'shared/api/rtkApi';
import type {EditableProfileCardSchema} from 'features/editableProfileCard';

export interface StateScheme {
	user: UserScheme;
	restorationScroll: RestorationScrollScheme;
	[rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

	// Async reducers
	login?: LoginScheme;
	profile?: EditableProfileCardSchema;
	articleDetails?: ArticleDetailsScheme;
	addCommentForm?: AddCommentFormScheme;
	articleListPage?: ArticleListPageScheme;
	articleDetailsPage?: ArticleDetailsPageScheme;
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
