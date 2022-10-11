import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button, ButtonVariant} from './Button';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Button>;

export default {
	title: 'shared/Button',
	component: Button,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Button>;

const Template: StoryType = args => <Button {...args}/>;

export const Default = Template.bind({}) as StoryType;
Default.args = {
	variant: ButtonVariant.DEFAULT,
	children: 'click me',
};

export const Outline = Template.bind({}) as StoryType;
Outline.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};

export const OutlineWithDarkTheme = Template.bind({}) as StoryType;
OutlineWithDarkTheme.args = {
	variant: ButtonVariant.OUTLINE,
	children: 'click me',
};
OutlineWithDarkTheme.decorators = [themDecorator(Theme.DARK)];

export const Subtle = Template.bind({}) as StoryType;
Subtle.args = {
	variant: ButtonVariant.SUBTLE,
	children: 'click me',
};
