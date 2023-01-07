import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Popover} from './Popover';
import cover from 'shared/assets/tests/image/javaScript_logo.png';
import {IcoThinAlien} from '../../assets/icons';

type StoryType = ComponentStory<typeof Popover>;

export default {
	title: 'shared/Popover',
	component: Popover,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {},
} as ComponentMeta<typeof Popover>;

const Template: StoryType = args => (
	<Popover
		{...args}
		trigger={
			<IcoThinAlien width={80}/>
		}
	>
		<>
			<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'}}>
				<p>Analytics</p>
				<p>Engagement</p>
				<p>Security</p>
				<p>Integrations</p>
			</div>

			<img src={cover as string} alt="" width={60}/>
		</>
	</Popover>);

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
