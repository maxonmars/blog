import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {CommentList} from './CommentList';

type StoryType = ComponentStory<typeof CommentList>;

export default {
	title: '!/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof CommentList>;

const Template: StoryType = args => <CommentList {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
