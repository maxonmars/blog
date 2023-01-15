import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {StarRating} from './StarRating';

type StoryType = ComponentStory<typeof StarRating>;

export default {
	title: 'shared/StarRating',
	component: StarRating,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof StarRating>;

const Template: StoryType = args => <StarRating {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
