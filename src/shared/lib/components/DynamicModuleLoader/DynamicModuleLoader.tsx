import type {FC, ReactElement} from 'react';
import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import type {ReduxStoreWithManager} from 'app/providers/StoreProvider';
import type {StateSchemeKey} from 'app/providers/StoreProvider/config/StateScheme';
import type {Reducer} from '@reduxjs/toolkit';

export type ReducersList = {
	[reducerKey in StateSchemeKey]?: Reducer;
};

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
		Object.entries(reducers).forEach(([reducerKey, reducer]) => {
			dispatch({type: `@INIT ${reducerKey} reducer`});
			store.reducerManager.add(reducerKey as StateSchemeKey, reducer);
		});

		return () => {
			if (isRemoveAfterUnmount) {
				Object.entries(reducers).forEach(([reducerKey]) => {
					dispatch({type: `@DESTROY ${reducerKey} reducer`});
					store.reducerManager.remove(reducerKey as StateSchemeKey);
				});
			}
		};
	}, [dispatch, isRemoveAfterUnmount, reducers, store.reducerManager]);

	return children;
};
