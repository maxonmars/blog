import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {DrawerMobile} from './DrawerMobile';

type StoryType = ComponentStory<typeof DrawerMobile>;

export default {
	title: '!/DrawerMobile',
	component: DrawerMobile,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof DrawerMobile>;

const Template: StoryType = args => <DrawerMobile {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
