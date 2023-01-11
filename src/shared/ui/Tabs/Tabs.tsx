import module from './Tabs.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {ReactNode} from 'react';
import {Card, CardVariant} from '../Card/Card';
import {typedMemo} from '@/shared/lib/typedMemo/typedMemo';

export interface TabsItem<T> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T> {
	className?: string;
	tabs: Array<TabsItem<T>>;
	selectedValue: T;
	onTabClick: (tab: TabsItem<T>) => void;
}

export const Tabs = typedMemo(<T extends string>({className, tabs, onTabClick, selectedValue}: TabsProps<T>) => {
	const getSelectedTab = (tabValue: string) => {
		return tabValue === selectedValue ? CardVariant.DEFAULT : CardVariant.OUTLINE;
	};

	const handleCardClick = (tab: TabsItem<T>) => () => {
		onTabClick(tab);
	};

	return (
		<div className={classNames([module.tabs, className])}>
			{tabs.map(tab => {
				return (
					<Card
						className={module.tab}
						variant={getSelectedTab(tab.value)}
						onClick={handleCardClick(tab)}
						key={tab.value}>
						{tab.content}
					</Card>
				);
			})}
		</div>
	);
});
