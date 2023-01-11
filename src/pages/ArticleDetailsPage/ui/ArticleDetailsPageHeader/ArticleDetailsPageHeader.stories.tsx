import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleDetailsPageHeader} from './ArticleDetailsPageHeader';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof ArticleDetailsPageHeader>;

export default {
	title: 'pages/ArticleDetailsPageHeader',
	component: ArticleDetailsPageHeader,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

const Template: StoryType = args => <ArticleDetailsPageHeader {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
