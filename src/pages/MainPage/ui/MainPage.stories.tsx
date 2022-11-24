import type {ComponentMeta, ComponentStory} from '@storybook/react';
import MainPage from './MainPage';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof MainPage>;

export default {
	title: 'pages/MainPage',
	component: MainPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof MainPage>;

const Template: StoryType = () => <MainPage/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
