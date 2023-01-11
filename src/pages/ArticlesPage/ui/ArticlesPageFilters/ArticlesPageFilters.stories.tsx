import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticlesPageFilters} from './ArticlesPageFilters';
import {storeDecorator} from '@/shared/lib/storybook/StoreDecorator';

type StoryType = ComponentStory<typeof ArticlesPageFilters>;

export default {
	title: 'pages/Articles/ArticlesPageFilters',
	component: ArticlesPageFilters,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
	decorators: [storeDecorator({})],
} as ComponentMeta<typeof ArticlesPageFilters>;

const Template: StoryType = args => <ArticlesPageFilters {...args}/>;

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
