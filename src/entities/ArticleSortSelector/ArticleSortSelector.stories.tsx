import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleSortSelector} from './ArticleSortSelector';

type StoryType = ComponentStory<typeof ArticleSortSelector>;

export default {
	title: 'entities/Article/ArticleSortSelector',
	component: ArticleSortSelector,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleSortSelector>;

const Template: StoryType = args => <ArticleSortSelector {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
