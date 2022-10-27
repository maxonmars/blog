import type {Story} from '@storybook/react';
import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {StoreProvider} from 'app/providers/StoreProvider';
import type {DeepPartial} from '@reduxjs/toolkit';

export const storeDecorator = (state: DeepPartial<StateScheme>) => Object.assign((Story: Story) => {
	return (
		<StoreProvider initialState={state}>
			<Story/>
		</StoreProvider>
	);
}, {displayName: 'ThemeDecorator'});
