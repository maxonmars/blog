import type {ComponentMeta, ComponentStory} from '@storybook/react';
import LoginForm from './LoginForm';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof LoginForm>;

export default {
	title: 'features/LoginForm',
	component: LoginForm,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof LoginForm>;

const Template: StoryType = args => <LoginForm {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};
Light.decorators = [storeDecorator({login: {username: 'ds', password: 'dw1d'}})];

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({login: {username: 'ds', password: 'dw1d'}})];
