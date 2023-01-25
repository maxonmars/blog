import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';
import {apiHandlers} from '@/shared/mock';
import type {ComponentStory, ComponentMeta} from '@storybook/react';
import ArticleRating from './ArticleRating';

export default {
	title: 'features/ArticleRating',
	component: ArticleRating,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		articleId: '1',
	},
} as ComponentMeta<typeof ArticleRating>;

const Template: ComponentStory<typeof ArticleRating> = args => {
	return (
		<ArticleRating {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [
	storeDecorator({
		user: {
			authData: {id: '1'},
		},
	}),
];
Default.parameters = {
	msw: {
		handlers: apiHandlers,
	},
};
