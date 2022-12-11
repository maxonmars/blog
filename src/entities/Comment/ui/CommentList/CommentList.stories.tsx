import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {CommentList} from './CommentList';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';

type StoryType = ComponentStory<typeof CommentList>;

export default {
	title: 'entities/Comment/CommentList',
	component: CommentList,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		comments: [
			{
				text: 'story comment 1',
				id: '1',
				user: {
					id: '1',
					username: 'StoryMan',
					avatar: AvatarImg as string,
				},
			},
			{
				text: 'story comment 2',
				id: '1',
				user: {
					id: '1',
					username: 'StoryMan',
					avatar: AvatarImg as string,
				},
			},
			{
				text: 'story comment 3',
				id: '1',
				user: {
					id: '1',
					username: 'StoryMan',
					avatar: AvatarImg as string,
				},
			},
		],
	},
} as ComponentMeta<typeof CommentList>;

const Template: StoryType = args => <CommentList {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
	comments: undefined,
};
