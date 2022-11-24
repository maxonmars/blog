import type {Story} from '@storybook/react';
import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {StoreProvider} from 'app/providers/StoreProvider';
import type {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import {loginReducer} from 'features/AuthByUsername/model/slice/LoginSlice';
import {profileReducer} from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateScheme>> = {
	login: loginReducer,
	profile: profileReducer,
};

export const storeDecorator = (
	state: DeepPartial<StateScheme>,
	asyncReducers?: DeepPartial<ReducersMapObject<StateScheme>>,
) => Object.assign((Story: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
			<Story/>
		</StoreProvider>
	);
}, {displayName: 'StoreDecorator'});
