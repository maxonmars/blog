import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeSwitcher} from './ThemeSwitcher';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof ThemeSwitcher>;

export default {
	title: 'widgets/ThemeSwitcher',
	component: ThemeSwitcher,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ThemeSwitcher>;

const Template: StoryType = args => <ThemeSwitcher {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themDecorator(Theme.DARK)];
