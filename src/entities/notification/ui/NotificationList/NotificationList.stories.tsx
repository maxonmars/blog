import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {NotificationList} from './NotificationList';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import {apiHandlers} from '@/shared/mock';

type StoryType = ComponentStory<typeof NotificationList>;

export default {
	title: 'entities/NotificationList',
	component: NotificationList,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof NotificationList>;

const Template: StoryType = args => <NotificationList {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [
	storeDecorator({login: {username: 'ds', password: 'dw1d'}}),
];

Default.parameters = {
	msw: {
		handlers: apiHandlers,
	},
};
