import module from './ArticleSortSelector.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import type {SelectOption} from 'shared/ui/Select/Select';
import {Select} from 'shared/ui/Select/Select';
import {useTranslation} from 'react-i18next';
import {ArticleSortField} from 'entities/Article';
import type {SortOrder} from 'shared/types';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (order: SortOrder) => void;
	onChangeSortField: (sort: ArticleSortField) => void;
}

export const ArticleSortSelector = ({className, sort, order, onChangeSortField, onChangeOrder}: ArticleSortSelectorProps) => {
	const {t} = useTranslation();

	const sortFieldOptions: Array<SelectOption<ArticleSortField>> = [
		{
			label: t('дате создания'),
			value: ArticleSortField.CREATED_AT,
		},
		{
			label: t('просмотрам'),
			value: ArticleSortField.VIEWS,
		},
		{
			label: t('названию'),
			value: ArticleSortField.TITLE,
		},
	];

	const orderOptions: Array<SelectOption<SortOrder>> = [
		{
			label: t('возрастанию'),
			value: 'desc',
		},
		{
			label: t('убыванию'),
			value: 'asc',
		},
	];

	return (
		<div className={classNames([module.articleSortSelector, className])}>
			<Select<ArticleSortField>
				className={module.sortBy}
				selectedValue={sort}
				label={t('Сортировать по')}
				options={sortFieldOptions}
				onChange={onChangeSortField}/>
			<Select<SortOrder>
				className={module.sortBy}
				selectedValue={order}
				label={t('По')}
				options={orderOptions}
				onChange={onChangeOrder}/>
		</div>
	);
};