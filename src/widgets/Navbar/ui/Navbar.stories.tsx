import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Navbar} from './Navbar';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof Navbar>;

export default {
	title: 'widgets/Navbar',
	component: Navbar,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Navbar>;

const Template: StoryType = args => <Navbar {...args}/>;

export const Light = Template.bind({});
Light.args = {
};
Light.decorators = [storeDecorator({login: {username: 'ds', password: 'dw1d'}})];

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK), storeDecorator({login: {username: 'ds', password: 'dw1d'}})];
