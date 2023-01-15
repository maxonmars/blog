import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {Rating} from './Rating';

export default {
	title: 'entities/Rating',
	component: Rating,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = args => {
	return (
		<Rating {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
