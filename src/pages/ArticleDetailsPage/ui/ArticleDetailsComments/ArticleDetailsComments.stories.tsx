import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleDetailsComments} from './ArticleDetailsComments';
import {storeDecorator} from 'shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof ArticleDetailsComments>;

export default {
	title: 'pages/ArticleDetailsComments',
	component: ArticleDetailsComments,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof ArticleDetailsComments>;

const Template: StoryType = args => <ArticleDetailsComments {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
