import type {ReactNode} from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from '../config/store';
import type {StateScheme} from '../config/StateScheme';
import type {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';

interface StoreProviderProps {
	children: ReactNode;
	initialState?: DeepPartial<StateScheme>;
	asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>;
}

export const StoreProvider = ({children, initialState, asyncReducers}: StoreProviderProps) => {
	const store = createReduxStore(initialState as StateScheme, asyncReducers as ReducersMapObject<StateScheme>);

	return (
		<Provider store={store}>
			{children}
		</Provider>
	);
};
