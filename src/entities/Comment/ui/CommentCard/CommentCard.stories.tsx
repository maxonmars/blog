import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {CommentCard} from './CommentCard';

type StoryType = ComponentStory<typeof CommentCard>;

export default {
	title: '!/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof CommentCard>;

const Template: StoryType = args => <CommentCard {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
