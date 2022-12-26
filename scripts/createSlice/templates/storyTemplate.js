module.exports = (layer, componentName) => (
	`import type {ComponentStory, ComponentMeta} from '@storybook/react';
import {${componentName}} from './${componentName}';

export default {
	title: '${layer}/${componentName}',
	component: ${componentName},
	argTypes: {
		backgroundColor: {control: 'color'},
	},
} as ComponentMeta<typeof ${componentName}>;

const Template: ComponentStory<typeof ${componentName}> = args => {
	return (
		<${componentName} {...args} />
	);
};

export const Default = Template.bind({});
Default.args = {};
Default.decorators = [];
`);
