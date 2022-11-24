import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Sidebar} from './Sidebar';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Sidebar>;

export default {
	title: 'widgets/Sidebar',
	component: Sidebar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Sidebar>;

const Template: StoryType = args => <Sidebar {...args}/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
