import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Title} from './Title';

type StoryType = ComponentStory<typeof Title>;

export default {
	title: 'shared/Title',
	component: Title,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		children: 'Some title',
	},
} as ComponentMeta<typeof Title>;

const Template: StoryType = args => <Title {...args}/>;

export const DefaultOrder1 = Template.bind({}) as StoryType;
DefaultOrder1.args = {
};

export const Order2 = Template.bind({}) as StoryType;
Order2.args = {
	order: 2,
};

export const Order3 = Template.bind({}) as StoryType;
Order3.args = {
	order: 3,
};
