import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleViewSelector} from './ArticleViewSelector';

type StoryType = ComponentStory<typeof ArticleViewSelector>;

export default {
	title: 'features/Article/ArticleViewSelector',
	component: ArticleViewSelector,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleViewSelector>;

const Template: StoryType = args => <ArticleViewSelector {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
