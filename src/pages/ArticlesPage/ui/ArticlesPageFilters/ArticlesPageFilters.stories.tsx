import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticlesPageFilters} from './ArticlesPageFilters';

type StoryType = ComponentStory<typeof ArticlesPageFilters>;

export default {
	title: 'pages/Articles/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: StoryType = args => <ArticlesPageFilters {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
