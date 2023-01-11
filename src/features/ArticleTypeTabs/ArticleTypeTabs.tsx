import module from './ArticleTypeTabs.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import type {TabsItem} from '@/shared/ui/Tabs/Tabs';
import {Tabs} from '@/shared/ui/Tabs/Tabs';
import {useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {ArticleType} from '@/entities/Article/model/consts/article';

interface ArticleTypeTabsProps {
	className?: string;
	onTabChange: (type: ArticleType) => void;
	selectedType: ArticleType;
}

export const ArticleTypeTabs = ({className, onTabChange, selectedType}: ArticleTypeTabsProps) => {
	const {t} = useTranslation();

	const tabs: Array<TabsItem<ArticleType>> = useMemo(() =>
		[
			{
				value: ArticleType.ALL,
				content: t('Все статьи'),
			},
			{
				value: ArticleType.IT,
				content: t('ИТ'),
			},
			{
				value: ArticleType.SCIENCE,
				content: t('Наука'),
			},
			{
				value: ArticleType.ECONOMICS,
				content: t('Экономика'),
			},
		], [t]);

	const handleTabChange = (tab: TabsItem<ArticleType>) => {
		onTabChange(tab.value);
	};

	return (
		<Tabs<ArticleType>
			className={classNames([module.ArticleTypeTabs, className])}
			tabs={tabs}
			selectedValue={selectedType}
			onTabClick={handleTabChange}/>
	);
};
