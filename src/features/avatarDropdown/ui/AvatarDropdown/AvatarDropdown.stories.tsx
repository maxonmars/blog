import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {AvatarDropdown} from './AvatarDropdown';

export default {
	title: 'features/AvatarDropdown',
	component: AvatarDropdown,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = args => {
	return (
		<AvatarDropdown {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
