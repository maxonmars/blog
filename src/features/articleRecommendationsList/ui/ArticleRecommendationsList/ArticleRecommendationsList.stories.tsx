import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleRecommendationsList} from './ArticleRecommendationsList';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import {apiHandlers} from '@/shared/mock';

export default {
	title: 'features/ArticleRecommendationsList',
	component: ArticleRecommendationsList,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => {
	return (
		<ArticleRecommendationsList {...args} />
	);
};

export const Default = Template.bind({});
Default.parameters = {
	msw: {
		handlers: apiHandlers,
	},
};
