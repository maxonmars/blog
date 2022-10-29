import type {FC, ReactElement} from 'react';
import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import type {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import type {StateSchemeKey} from 'app/providers/StoreProvider/config/StateScheme';
import type {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
	[reducerKey in StateSchemeKey]?: Reducer;
};

type ReducersListEntry = [StateSchemeKey, Reducer];

interface DynamicModuleLoaderProps {
	reducers: ReducersList;
	children: ReactElement;
	isRemoveAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
	const {children, reducers, isRemoveAfterUnmount = true} = props;
	const dispatch = useDispatch();
	const store = useStore() as ReduxStoreWithManager;
	useEffect(() => {
		Object.entries(reducers).forEach(([reducerKey, reducer]: ReducersListEntry) => {
			dispatch({type: `@INIT ${reducerKey} reducer`});
			store.reducerManager.add(reducerKey, reducer);
		});

		return () => {
			if (isRemoveAfterUnmount) {
				Object.entries(reducers).forEach(([reducerKey]: ReducersListEntry) => {
					dispatch({type: `@DESTROY ${reducerKey} reducer`});
					store.reducerManager.remove(reducerKey);
				});
			}
		};
	}, [dispatch, isRemoveAfterUnmount, reducers, store.reducerManager]);

	return children;
};
