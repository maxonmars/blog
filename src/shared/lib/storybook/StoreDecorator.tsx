import type {StateScheme} from '@/app/providers/StoreProvider';
import {StoreProvider} from '@/app/providers/StoreProvider';
import {articleDetailsReducer} from '@/entities/Article/testing';
import {addCommentFormReducer} from '@/features/addCommentForm/testing';
import {loginReducer} from '@/features/AuthByUsername/testing';
import {editableProfileCardReducer} from '@/features/editableProfileCard/testing';
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/testing';
import type {Story} from '@storybook/react';
import type {ReducersList} from '../components/DynamicModuleLoader/DynamicModuleLoader';

const defaultAsyncReducers: ReducersList = {
	login: loginReducer,
	profile: editableProfileCardReducer,
	articleDetails: articleDetailsReducer,
	addCommentForm: addCommentFormReducer,
	articleDetailsPage: articleDetailsPageReducer,
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
