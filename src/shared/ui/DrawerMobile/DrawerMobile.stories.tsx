import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {useState} from 'react';
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
	const [isOpenModal, setIsOpenModal] = useState(true);

	const handleModalClose = () => {
		setIsOpenModal(false);
	};

	return (
		<DrawerMobile {...args} isOpened={isOpenModal} onClose={handleModalClose}>
			{close => (
				<div>
					<button onClick={close(handleModalClose)}>close</button>
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
