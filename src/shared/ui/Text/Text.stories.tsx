import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Text, TextSize, TextVariant} from './Text';

type StoryType = ComponentStory<typeof Text>;

export default {
	title: 'shared/Text',
	component: Text,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		children: 'Some text',
	},
} as ComponentMeta<typeof Text>;

const Template: StoryType = args => <Text {...args}/>;

export const Default = Template.bind({}) as StoryType;
Default.args = {
};

export const Red = Template.bind({}) as StoryType;
Red.args = {
	variant: TextVariant.RED,
};

export const Small = Template.bind({}) as StoryType;
Small.args = {
	size: TextSize.SM,
};

export const Large = Template.bind({}) as StoryType;
Large.args = {
	size: TextSize.LG,
};
