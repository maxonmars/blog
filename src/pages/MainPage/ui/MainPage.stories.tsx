import type {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from './MainPage';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof MainPage>;

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof MainPage>;

const Template: StoryType = args => <MainPage {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themDecorator(Theme.DARK)];
