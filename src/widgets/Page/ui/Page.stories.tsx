import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Page} from './Page';

type StoryType = ComponentStory<typeof Page>;

export default {
	title: 'widgets/Page',
	component: Page,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof Page>;

const Template: StoryType = args => <Page {...args}>Page content</Page>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
