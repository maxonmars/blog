import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {RatingCard} from './RatingCard';

export default {
	title: 'entities/RatingCard',
	component: RatingCard,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = args => {
	return (
		<RatingCard {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
