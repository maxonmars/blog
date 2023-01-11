import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof ArticleEditPage>;

export default {
	title: 'pages/Article/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof ArticleEditPage>;

const Template: StoryType = args => <ArticleEditPage {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
