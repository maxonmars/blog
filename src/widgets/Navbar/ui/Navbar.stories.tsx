import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Navbar} from './Navbar';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Navbar>;

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Navbar>;

const Template: StoryType = args => <Navbar {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
