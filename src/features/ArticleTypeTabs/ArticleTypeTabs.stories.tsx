import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleTypeTabs} from './ArticleTypeTabs';

type StoryType = ComponentStory<typeof ArticleTypeTabs>;

export default {
	title: 'features/ArticleTypeTabs',
	component: ArticleTypeTabs,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleTypeTabs>;

const Template: StoryType = args => <ArticleTypeTabs {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
