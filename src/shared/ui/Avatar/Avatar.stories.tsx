import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Avatar} from './Avatar';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Avatar>;

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof Avatar>;

const Template: StoryType = () => <Avatar/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
