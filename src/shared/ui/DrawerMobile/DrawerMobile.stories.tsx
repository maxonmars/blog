import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {DrawerMobile} from './DrawerMobile';

type StoryType = ComponentStory<typeof DrawerMobile>;

export default {
	title: 'shared/DrawerMobile',
	component: DrawerMobile,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof DrawerMobile>;

const Template: StoryType = args => {
	return (
		<DrawerMobile {...args}>
			{close => (
				<div>
					<button onClick={close}>close</button>
					<ol>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
						<li>Lorem ipsum dolor sit amet.</li>
					</ol>
				</div>)}
		</DrawerMobile>);
};

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
