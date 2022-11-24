import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {PageError} from './PageError';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
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

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
