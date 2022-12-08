import type {Story} from '@storybook/react';
import type {StateScheme} from 'app/providers/StoreProvider/config/StateScheme';
import {StoreProvider} from 'app/providers/StoreProvider';
import {loginReducer} from 'features/AuthByUsername/model/slice/loginSlice';
import {profileReducer} from 'entities/Profile';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsReducer} from 'entities/Article/model/slice/articleDetailsSlice';
import {addCommentFormReducer} from 'features/addCommentForm/model/slice/addCommentFormSlice';

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: profileReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsComments: articleDetailsReducer,
};

export const storeDecorator = (
	state: DeepPartial<StateScheme>,
	asyncReducers?: ReducersList,
) => Object.assign((Story: Story) => {
	return (
		<StoreProvider initialState={state} asyncReducers={{...defaultAsyncReducers, ...asyncReducers}}>
			<Story/>
		</StoreProvider>
	);
}, {displayName: 'StoreDecorator'});
