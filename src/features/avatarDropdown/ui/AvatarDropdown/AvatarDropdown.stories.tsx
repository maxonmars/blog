import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {AvatarDropdown} from './AvatarDropdown';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';

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
Default.decorators = [storeDecorator({login: {username: 'ds', password: 'dw1d'}})];
