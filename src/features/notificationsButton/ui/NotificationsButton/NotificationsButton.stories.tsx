import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {NotificationsButton} from './NotificationsButton';

export default {
	title: 'features/NotificationsButton',
	component: NotificationsButton,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof NotificationsButton>;

const Template: ComponentStory<typeof NotificationsButton> = args => {
	return (
		<NotificationsButton {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
