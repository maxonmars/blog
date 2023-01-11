import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Code} from './Code';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

type StoryType = ComponentStory<typeof Code>;

export default {
	title: 'shared/Code',
	component: Code,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		children: 'const Template: StoryType = args => <Code {...args}/>;\n'
			+ '\n'
			+ 'export const Default = Template.bind({});\n'
			+ 'Default.args = {};\n'
			+ '\n'
			+ 'Default.decorators = [];',
	},
} as ComponentMeta<typeof Code>;

const Template: StoryType = args => <Code {...args}/>;

export const Default = Template.bind({});
Default.args = {};

export const Dark = Template.bind({});
Dark.args = {};

Dark.decorators = [themeDecorator(Theme.DARK)];

export const Bacterium = Template.bind({});
Bacterium.args = {};

Bacterium.decorators = [themeDecorator(Theme.BACTERIUM)];
