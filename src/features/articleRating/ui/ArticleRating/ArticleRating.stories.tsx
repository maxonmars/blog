import type {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = args => {
	return (
		<ArticleRating {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
