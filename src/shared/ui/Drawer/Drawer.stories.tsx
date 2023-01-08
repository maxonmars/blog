import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Drawer} from './Drawer';
import {useState} from 'react';

type StoryType = ComponentStory<typeof Drawer>;

export default {
	title: 'shared/Drawer',
	component: Drawer,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		title: 'Title',
	},
} as ComponentMeta<typeof Drawer>;

const Template: StoryType = args => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<>
			<button onClick={() => {
				setIsOpen(true);
			}}>Open Drawer</button>
			<Drawer {...args} onClose={() => {
				setIsOpen(false);
			}} isOpened={isOpen}>
				<div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, sapiente.</div>
			</Drawer>
		</>);
};

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
