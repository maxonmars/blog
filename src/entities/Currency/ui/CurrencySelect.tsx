import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Currency} from '../model/types/currency';
import {isSomeEnum} from 'shared/lib/isSomeEnum/isSomeEnum';
import {memo} from 'react';
import {Select} from 'shared/ui/Select/Select';

interface CurrencySelectProps {
	className?: string;
	selectedValue?: Currency;
	onChange: (value: Currency, name: string) => void;
	disabled?: boolean;
}

const options = [
	{value: Currency.EUR, content: Currency.EUR},
	{value: Currency.RUB, content: Currency.RUB},
	{value: Currency.USD, content: Currency.USD},
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
		<Select<Currency>
			className={classNames([className])}
			label={t('Валюта')}
			options={options}
			isDisabled={disabled}
			selectedValue={selectedValue}
			onChange={handleOptionChange}
		/>);
});

CurrencySelect.displayName = 'CurrencySelect';
