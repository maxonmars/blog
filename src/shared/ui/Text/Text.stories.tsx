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

export const Default = Template.bind({});
Default.args = {
};

export const Red = Template.bind({});
Red.args = {
	variant: TextVariant.RED,
};

export const Small = Template.bind({});
Small.args = {
	size: TextSize.SM,
};

export const Large = Template.bind({});
Large.args = {
	size: TextSize.LG,
};
