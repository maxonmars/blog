import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Loader} from './Loader';
import {themDecorator} from 'shared/lib/storybook/ThemDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Loader>;

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Loader>;

const Template: StoryType = args => <Loader {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themDecorator(Theme.DARK)];
