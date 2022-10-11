import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {PageError} from './PageError';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof PageError>;

export default {
	title: 'widgets/PageError',
	component: PageError,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof PageError>;

const Template: StoryType = args => <PageError {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themDecorator(Theme.DARK)];
