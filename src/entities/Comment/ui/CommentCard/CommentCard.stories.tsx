import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {CommentCard} from './CommentCard';
import AvatarImg from 'shared/assets/tests/image/avatar-stories.jpeg';

type StoryType = ComponentStory<typeof CommentCard>;

export default {
	title: 'entities/CommentCard',
	component: CommentCard,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		comment: {
			text: 'story comment',
			id: '1',
			user: {
				id: '1',
				username: 'StoryMan',
				avatar: AvatarImg as string,
			},
		},
	},
} as ComponentMeta<typeof CommentCard>;

const Template: StoryType = args => <CommentCard {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];

export const Loading = Template.bind({});
Loading.args = {
	isLoading: true,
};
