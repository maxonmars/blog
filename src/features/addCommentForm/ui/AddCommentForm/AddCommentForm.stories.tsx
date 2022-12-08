import type {ComponentMeta, ComponentStory} from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof AddCommentForm>;

export default {
	title: 'features/AddCommentForm',
	component: AddCommentForm,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof AddCommentForm>;

const Template: StoryType = args => <AddCommentForm {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [storeDecorator({addCommentForm: {}})];
