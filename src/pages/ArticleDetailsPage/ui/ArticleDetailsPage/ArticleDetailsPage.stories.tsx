import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import {apiHandlers} from '@/shared/mock/mockServiceWorker';
import {article, commentsNormalized} from '@/shared/mock';

type StoryType = ComponentStory<typeof ArticleDetailsPage>;

export default {
	title: 'pages/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator(
		{
			articleDetails: {data: article},
			articleDetailsPage: {
				comments: commentsNormalized,
			},
		},
	)],
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: StoryType = args => <ArticleDetailsPage {...args}/>;

export const Default = Template.bind({});
Default.parameters = {
	msw: {
		handlers: apiHandlers,
	},
};
Default.args = {};
