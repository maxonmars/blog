import type {FlexProps} from '../Flex/Flex';
import {Flex} from '../Flex/Flex';
import React from 'react';

type VStackProps = Omit<FlexProps, 'direction'>;

export const VStack = (props: VStackProps) => {
	const {align = 'start', children, ...restProps} = props;
	return (
		<Flex direction="column" align={align} {...restProps}>
			{children}
		</Flex>
	);
};
