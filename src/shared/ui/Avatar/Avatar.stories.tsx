import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Avatar, AvatarSize} from './Avatar';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import AvatarImg from '../../assets/tests/image/avatar-stories.jpeg';

type StoryType = ComponentStory<typeof Avatar>;

export default {
	title: 'shared/Avatar',
	component: Avatar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		src: AvatarImg as string,
	},
} as ComponentMeta<typeof Avatar>;

const Template: StoryType = args => <Avatar {...args}/>;

export const Light = Template.bind({});
Light.args = {
	size: AvatarSize.LG,
};

export const Dark = Template.bind({});
Dark.args = {
	size: AvatarSize.MD,
};
Dark.decorators = [themeDecorator(Theme.DARK)];
