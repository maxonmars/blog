import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticleDetailsPage from './ArticleDetailsPage';

type StoryType = ComponentStory<typeof ArticleDetailsPage>;

export default {
	title: 'page/ArticleDetailsPage',
	component: ArticleDetailsPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: StoryType = args => <ArticleDetailsPage {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
