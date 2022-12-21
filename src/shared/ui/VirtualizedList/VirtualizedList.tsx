import type {ReactNode} from 'react';
import React, {useEffect, useLayoutEffect, useRef} from 'react';
import {useWindowVirtualizer} from '@tanstack/react-virtual';

interface ItemOption {
	virtualItemIndex: number;
	isLoaderRow: boolean;
}

interface VirtualizedListProps<T> {
	isLoading?: boolean;
	hasMore?: boolean;
	scrollIndex?: number;
	estimateSize: number;
	fetchNextPage: () => void;
	dataList: T[];
	children: (itemData: T, option: ItemOption) => ReactNode;
}

export const VirtualizedList = <T extends Record<string, any>>(props: VirtualizedListProps<T>) => {
	const {children, dataList, estimateSize, fetchNextPage, isLoading, hasMore, scrollIndex} = props;

	const parentRef = useRef<HTMLDivElement>(null);
	const parentOffsetRef = useRef(0);
	const isInit = useRef(true);

	useLayoutEffect(() => {
		parentOffsetRef.current = parentRef.current?.offsetTop ?? 0;
	}, []);

	const count = dataList.length;

	const rowVirtualizer = useWindowVirtualizer({
		count,
		estimateSize: () => estimateSize,
		scrollMargin: parentOffsetRef.current,
	});

	const virtualArray = rowVirtualizer.getVirtualItems();

	useLayoutEffect(() => {
		if (isLoading === false && isInit && scrollIndex !== undefined) {
			rowVirtualizer.scrollToIndex(scrollIndex);
			isInit.current = false;
		}
	}, [rowVirtualizer, scrollIndex, isInit, isLoading]);

	useEffect(() => {
		const [lastItem] = [...virtualArray].reverse();

		if (!lastItem) {
			return;
		}

		if (lastItem.index >= count - 1 && !isLoading && hasMore) {
			fetchNextPage();
		}
	}, [virtualArray, count, isLoading, fetchNextPage, hasMore]);

	return (
		<div ref={parentRef}>
			<div
				style={{
					height: rowVirtualizer.getTotalSize(),
					width: '100%',
					position: 'relative',
				}}>
				{virtualArray.map(virtualItem => {
					const isLoaderRow = virtualItem.index >= count - 1;
					const itemData = dataList[virtualItem.index];

					return (
						<div
							key={virtualItem.key}
							data-index={virtualItem.index}
							ref={rowVirtualizer.measureElement}
							style={{
								position: 'absolute',
								top: 0,
								left: 0,
								width: '100%',
								transform: `translateY(${virtualItem.start}px)`,
							}}>
							{children(itemData, {isLoaderRow, virtualItemIndex: virtualItem.index})}
						</div>
					);
				})}
			</div>
		</div>
	);
};
