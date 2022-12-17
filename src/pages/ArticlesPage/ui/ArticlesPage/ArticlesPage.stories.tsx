import type {ComponentMeta, ComponentStory} from '@storybook/react';
import ArticlesPage from './ArticlesPage';

type StoryType = ComponentStory<typeof ArticlesPage>;

export default {
	title: 'pages/Articles/ArticlesPage',
	component: ArticlesPage,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticlesPage>;

const Template: StoryType = args => <ArticlesPage {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
