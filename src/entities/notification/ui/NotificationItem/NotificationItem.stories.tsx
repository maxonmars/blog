import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationItem} from './NotificationItem';

export default {
	title: 'entities/NotificationItem',
	component: NotificationItem,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = args => {
	return (
		<NotificationItem {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {
	notification: {title: 'Test title', id: '1', description: 'Test description', userId: '1'},
};
Default.decorators = [];
