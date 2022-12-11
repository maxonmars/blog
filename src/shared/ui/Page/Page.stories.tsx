import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Page} from './Page';

type StoryType = ComponentStory<typeof Page>;

export default {
	title: '!/Page',
	component: Page,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof Page>;

const Template: StoryType = args => <Page {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
