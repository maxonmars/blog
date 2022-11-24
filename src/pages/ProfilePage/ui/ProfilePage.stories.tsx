import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ProfilePage from './ProfilePage';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof ProfilePage>;

export default {
	title: 'pages/ProfilePage',
	component: ProfilePage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ProfilePage>;

const Template: StoryType = args => <ProfilePage {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};
Light.decorators = [storeDecorator({})];

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({})];