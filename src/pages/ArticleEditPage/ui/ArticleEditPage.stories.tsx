import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticleEditPage from './ArticleEditPage';

type StoryType = ComponentStory<typeof ArticleEditPage>;

export default {
	title: 'page/Article/ArticleEditPage',
	component: ArticleEditPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleEditPage>;

const Template: StoryType = args => <ArticleEditPage {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
