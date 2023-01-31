import type {ReduxStoreWithManager, StateScheme, StateSchemeKey} from '@/app/providers/StoreProvider';
import type {Reducer} from '@reduxjs/toolkit';
import type {ReactElement} from 'react';
import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';

export type ReducersList = {
	[reducerKey in StateSchemeKey]?: Reducer<NonNullable<StateScheme[reducerKey]>>;
};

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	children: ReactElement;
	isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
	const {children, reducers, isRemoveAfterUnmount} = props;
	const dispatch = useDispatch();
	const store = useStore() as ReduxStoreWithManager;

	useEffect(() => {
		const reducerMap = store.reducerManager.getReducerMap();

		Object.entries(reducers).forEach(([reducerKey, reducer]) => {
			const isMounted = Boolean(reducerMap[reducerKey as StateSchemeKey]);

			if (!isMounted) {
				store.reducerManager.add(reducerKey as StateSchemeKey, reducer);
				dispatch({type: `@INIT ${reducerKey} reducer`});
			}
		});

		return () => {
			if (isRemoveAfterUnmount) {
				Object.entries(reducers).forEach(([reducerKey]) => {
					store.reducerManager.remove(reducerKey as StateSchemeKey);
					dispatch({type: `@DESTROY ${reducerKey} reducer`});
				});
			}
		};
	}, [dispatch, isRemoveAfterUnmount, reducers, store.reducerManager]);

	return children;
};
