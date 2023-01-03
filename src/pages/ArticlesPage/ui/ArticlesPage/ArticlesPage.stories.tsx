import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticlesPage from './ArticlesPage';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';
import type {Article} from 'entities/Article';
import {UserRoles} from 'entities/User';
import {ArticleSortField, ArticleView} from 'entities/Article';
import {ArticleBlockType, ArticleType} from 'entities/Article/model/consts/article';

type StoryType = ComponentStory<typeof ArticlesPage>;

const article: Article = {
	type: [ArticleType.IT],
	img: '',
	title: 'JS News',
	id: '1',
	subtitle: 'subtitle',
	views: 123,
	createdAt: '28.09.2022',
	user: {avatar: '', username: 'Max', id: '1', roles: [UserRoles.USER]},
	blocks: [
		{type: ArticleBlockType.TEXT, id: '1', title: 'title', paragraphs: ['paragraphs']},
	],
};

export default {
	title: 'pages/Articles/ArticlesPage',
	component: ArticlesPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({
		articleListPage: {
			pages: {
				entities: {
					1: {...article},
					2: {...article, id: '2'},
					3: {...article, id: '3'},
				},
				ids: ['1', '2', '3'],
				isLoading: true,
				view: ArticleView.LIST,
				page: 1,
				limit: 9,
				hasMore: true,
				_isInit: false,
				sort: ArticleSortField.CREATED_AT,
				order: 'asc',
				search: '',
				type: ArticleType.ALL,
			},
		},
	})],
} as ComponentMeta<typeof ArticlesPage>;

const Template: StoryType = args => <ArticlesPage {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
