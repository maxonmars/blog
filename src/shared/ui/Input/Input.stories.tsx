import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Input} from './Input';
import {themeDecorator} from 'shared/lib/storybook/ThemeDecorator';
import {Theme} from 'shared/lib/theme';
import {useState} from 'react';

type StoryType = ComponentStory<typeof Input>;

export default {
	title: 'shared/Input',
	component: Input,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		placeholder: 'placeholder',
	},
} as ComponentMeta<typeof Input>;

const Template: StoryType = args => {
	const [value, setValue] = useState('');
	return <Input {...args} onChange={setValue} value={value}/>;
};

export const Light = Template.bind({});
Light.args = {
};

export const Dark = Template.bind({});
Dark.args = {
};
Dark.decorators = [themeDecorator(Theme.DARK)];
