import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {NotFoundPage} from './NotFoundPage';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

type StoryType = ComponentStory<typeof NotFoundPage>;

export default {
	title: 'pages/NotFoundPage',
	component: NotFoundPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof NotFoundPage>;

const Template: StoryType = args => <NotFoundPage {...args}/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
