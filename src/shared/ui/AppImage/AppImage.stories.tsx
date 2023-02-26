import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {AppImage} from './AppImage';
import contentImage from '../../assets/tests/image/javaScript_logo.png';

type StoryType = ComponentStory<typeof AppImage>;

export default {
	title: 'shared/AppImage',
	component: AppImage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		width: 200,
		height: 200,
		fallback: <div>Fallback</div>,
		errorFallback: <div>ErrorFallback</div>,
	},
} as ComponentMeta<typeof AppImage>;

const Template: StoryType = args => <AppImage {...args}/>;

export const Main = Template.bind({});
Main.args = {
	src: contentImage as string,
};

export const Error = Template.bind({});
Error.args = {
	src: '',
};
