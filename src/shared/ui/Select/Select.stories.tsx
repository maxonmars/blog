import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from './Select';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Select>;

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		options: [
			{label: 'label1', value: 'value1'},
			{label: 'label2', value: 'value2'},
			{label: 'label3', value: 'value3'},
		],
		label: 'my select',
	},
} as ComponentMeta<typeof Select>;

const Template: StoryType = args => <Select {...args}/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
