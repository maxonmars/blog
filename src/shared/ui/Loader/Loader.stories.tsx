import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Loader} from './Loader';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

type StoryType = ComponentStory<typeof Loader>;

export default {
	title: 'shared/Loader',
	component: Loader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Loader>;

const Template: StoryType = args => <Loader {...args}/>;

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
