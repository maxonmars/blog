import type {ComponentMeta, ComponentStory} from '@storybook/react';
import AboutPage from './AboutPage';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

type StoryType = ComponentStory<typeof AboutPage>;

export default {
	title: 'pages/AboutPage',
	component: AboutPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof AboutPage>;

const Template: StoryType = () => <AboutPage/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
