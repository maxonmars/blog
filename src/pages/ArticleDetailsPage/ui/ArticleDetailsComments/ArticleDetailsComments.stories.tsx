import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleDetailsComments} from './ArticleDetailsComments';

type StoryType = ComponentStory<typeof ArticleDetailsComments>;

export default {
	title: '!/ArticleDetailsComments',
	component: ArticleDetailsComments,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: StoryType = args => <ArticleDetailsComments {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
