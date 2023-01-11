import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Skeleton} from './Skeleton';
import {themeDecorator} from '@/shared/lib/storybook/ThemeDecorator';
import {Theme} from '@/shared/lib/theme';

type StoryType = ComponentStory<typeof Skeleton>;

export default {
	title: 'shared/Skeleton',
	component: Skeleton,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		width: '100%',
		height: 200,
	},
} as ComponentMeta<typeof Skeleton>;

const Template: StoryType = args => <Skeleton {...args}/>;

export const Default = Template.bind({});
Default.args = {
};

export const Circle = Template.bind({});
Circle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];

export const DarkCircle = Template.bind({});
DarkCircle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
};
DarkCircle.decorators = [themeDecorator(Theme.DARK)];

export const Bacterium = Template.bind({});
Bacterium.args = {
};
Bacterium.decorators = [themeDecorator(Theme.BACTERIUM)];

export const BacteriumCircle = Template.bind({});
BacteriumCircle.args = {
	borderRadius: '50%',
	width: 100,
	height: 100,
};
BacteriumCircle.decorators = [themeDecorator(Theme.BACTERIUM)];
