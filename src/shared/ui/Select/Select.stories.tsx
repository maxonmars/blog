import type {ComponentMeta, ComponentStory} from '@storybook/react';
import {Select} from './Select';
import {useState} from 'react';

type StoryType = ComponentStory<typeof Select>;

export default {
	title: 'shared/Select',
	component: Select,
	argTypes: {
		backgroundColor: {control: 'color'},
	},
	args: {
		label: 'Person',
		placeholder: 'Выберете значение',
		options: [
			{value: '1', content: 'Durward Reynolds', isDisabled: false},
			{value: '2', content: 'Kenton Towne', isDisabled: false},
			{value: '3', content: 'Therese Wunsch', isDisabled: false},
			{value: '4', content: 'Benedict Kessler', isDisabled: true},
			{value: '5', content: 'Katelyn Rohan', isDisabled: false},
		],
		decorators: [
			(Story: any) => <div style={{padding: 100}}><Story /></div>,
		],
	},
} as ComponentMeta<typeof Select>;

const Template: StoryType = args => {
	const [state, setState] = useState<string>('');

	const handleOptionChange = (value: string) => {
		setState(value);
	};

	return (<div style={{display: 'grid', gridTemplateColumns: 'max-content max-content max-content'}}>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<div>NFSDLF</div>
		<Select {...args} onChange={handleOptionChange} selectedValue={state}/>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<span>0349tj3</span>
		<div>NFSDLF</div>
		<div>NFSDLF</div>
	</div>);
};

export const Default = Template.bind({});
Default.args = {};

Default.decorators = [];
