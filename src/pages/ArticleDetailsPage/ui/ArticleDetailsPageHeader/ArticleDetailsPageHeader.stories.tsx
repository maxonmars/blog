import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';

type StoryType = ComponentStory<typeof ArticleDetailsPageHeader>;

export default {
	title: '!/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: StoryType = args => <ArticleDetailsPageHeader {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
