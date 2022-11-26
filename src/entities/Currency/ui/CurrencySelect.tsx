import {classNames} from 'shared/lib/classNames/classNames';
import {Select} from 'shared/ui/Select/Select';
import {useTranslation} from 'react-i18next';
import {Currency} from 'entities/Currency/model/types/currency';
import {isSomeEnum} from 'shared/lib/isSomeEnum/isSomeEnum';
import {memo} from 'react';

interface CurrencySelectProps {
	className?: string;
	selectedValue?: Currency;
	onChange: (value: Currency, name: string) => void;
	disabled?: boolean;
}

const options = [
	{label: Currency.EUR, value: Currency.EUR},
	{label: Currency.RUB, value: Currency.RUB},
	{label: Currency.USD, value: Currency.USD},
];

const isCurrencyEnum = isSomeEnum(Currency);

export const CurrencySelect = memo(({className, selectedValue, onChange, disabled}: CurrencySelectProps) => {
	const {t} = useTranslation();
	const handleOptionChange = (value: string) => {
		if (isCurrencyEnum(value)) {
			onChange(value, 'currency');
		}
	};

	return (
		<Select
			className={classNames([className])}
			label={t('Валюта')}
			options={options}
			disabled={disabled}
			selectedValue={selectedValue}
			onChange={handleOptionChange}
		/>);
});

CurrencySelect.displayName = 'CurrencySelect';
