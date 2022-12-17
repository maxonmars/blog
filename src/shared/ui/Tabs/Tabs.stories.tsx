import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Tabs} from './Tabs';
import {action} from '@storybook/addon-actions';

type StoryType = ComponentStory<typeof Tabs>;

export default {
	title: 'shared/Tabs',
	component: Tabs,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		tabs: [
			{
				value: 'tab1',
				content: 'tab1',
			},
			{
				value: 'tab2',
				content: 'tab2',
			},
			{
				value: 'tab3',
				content: 'tab3',
			},
		],
		selectedValue: 'tab2',
		onTabClick: action('onTabClick'),
	},
} as ComponentMeta<typeof Tabs>;

const Template: StoryType = args => <Tabs {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
