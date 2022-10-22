import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Modal} from './Modal';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';

type StoryType = ComponentStory<typeof Modal>;

export default {
	title: 'shared/Modal',
	component: Modal,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		isOpened: true,
		children: 'Lorem10',
		title: 'MODAL HEADER',
		onClose() {
			console.log('on close');
		},
	},
} as ComponentMeta<typeof Modal>;

const Template: StoryType = args => <Modal {...args}/>;

export const Light = Template.bind({}) as StoryType;
Light.args = {
};

export const Dark = Template.bind({}) as StoryType;
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
