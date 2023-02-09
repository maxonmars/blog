import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Dropdown} from './Dropdown';
import {Button} from '../Button/Button';

type StoryType = ComponentStory<typeof Dropdown>;

export default {
	title: 'shared/Dropdown',
	component: Dropdown,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof Dropdown>;

const Template: StoryType = args => <Dropdown {...args}/>;

export const Default = Template.bind({});
Default.args = {
	trigger: <Button>Open</Button>,
	items: [
		{
			content: 'first',
		},
		{
			content: 'second',
		},
		{
			content: 'third',
		},
	],
};
