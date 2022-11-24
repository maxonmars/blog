import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppLink} from './AppLink';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof AppLink>;

export default {
	title: 'shared/AppLink',
	component: AppLink,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		to: '/',
		children: 'Link',
	},
} as ComponentMeta<typeof AppLink>;

const Template: StoryType = args => <AppLink {...args}/>;

export const Main = Template.bind({});
Main.args = {
};

export const Inverted = Template.bind({});
Inverted.args = {
};
Inverted.decorators = [themeDecorator(Theme.DARK)];
