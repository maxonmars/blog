import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Flex} from './Flex';

type StoryType = ComponentStory<typeof Flex>;

export default {
	title: 'shared/Flex',
	component: Flex,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		children: (
			<>
				<div>first</div>
				<div>first</div>
				<div>first</div>
				<div>first</div>
			</>
		),
	},
} as ComponentMeta<typeof Flex>;

const Template: StoryType = args => <Flex {...args}/>;

export const Row = Template.bind({});
Row.args = {
};

export const RowGap025 = Template.bind({});
RowGap025.args = {
	gap: '0.25',
};
export const RowGap05 = Template.bind({});
RowGap05.args = {
	gap: '0.5',
};

export const RowGap1 = Template.bind({});
RowGap1.args = {
	gap: '1',
};

export const Column = Template.bind({});
Column.args = {
	direction: 'column',
};

export const ColumnGap1 = Template.bind({});
ColumnGap1.args = {
	gap: '1',
	direction: 'column',
};

export const ColumnAlignEnd = Template.bind({});
ColumnAlignEnd.args = {
	direction: 'column',
	align: 'end',
};
