import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Card} from './Card';
import {Text} from 'shared/ui/Text/Text';

type StoryType = ComponentStory<typeof Card>;

export default {
	title: 'shared/Card',
	component: Card,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof Card>;

const Template: StoryType = args =>
	<div style={{width: '150px'}}>
		<Card {...args}>
			<div style={{height: '200px'}}>
				<Text>Card contend</Text>
			</div>
		</Card>
	</div>;

export const Default = Template.bind({});
Default.args = {
};

Default.decorators = [];
