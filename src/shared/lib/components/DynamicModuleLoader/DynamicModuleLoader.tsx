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
