import {classNames} from 'shared/lib/classNames/classNames';
import {Select} from 'shared/ui/Select/Select';
import {useTranslation} from 'react-i18next';
import {isSomeEnum} from 'shared/lib/isSomeEnum/isSomeEnum';
import {Country} from '../model/types/country';
import {memo} from 'react';

interface CountrySelectProps {
	className?: string;
	selectedValue?: Country;
	onChange: (value: Country, name: string) => void;
	disabled?: boolean;
}

const options = [
	{label: Country.Armenia, value: Country.Armenia},
	{label: Country.Russia, value: Country.Russia},
	{label: Country.Ukraine, value: Country.Ukraine},
	{label: Country.Belarus, value: Country.Belarus},
	{label: Country.Kazakhstan, value: Country.Kazakhstan},
];

const isCountryEnum = isSomeEnum(Country);

export const CountrySelect = memo(({className, selectedValue, onChange, disabled}: CountrySelectProps) => {
	const {t} = useTranslation();
	const handleOptionChange = (value: string) => {
		if (isCountryEnum(value)) {
			onChange(value, 'country');
		}
	};

	return <Select
		className={classNames([className])}
		label={t('Страна')}
		options={options}
		disabled={disabled}
		selectedValue={selectedValue}
		onChange={handleOptionChange}
	/>;
});

CountrySelect.displayName = 'CountrySelect';
