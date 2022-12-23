import React from 'react';
import type {FlexProps} from '../Flex/Flex';
import {Flex} from '../Flex/Flex';

type HStackProps = Omit<FlexProps, 'direction'>;

export const HStack = (props: HStackProps) => {
	const {children, ...restProps} = props;
	return (
		<Flex direction="row" {...restProps}>
			{children}
		</Flex>
	);
};
