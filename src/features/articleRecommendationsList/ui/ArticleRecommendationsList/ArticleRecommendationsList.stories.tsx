import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleRecommendationsList} from './ArticleRecommendationsList';

export default {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => {
	return (
		<ArticleRecommendationsList {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
