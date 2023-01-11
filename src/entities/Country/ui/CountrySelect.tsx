import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {isSomeEnum} from '@/shared/lib/isSomeEnum/isSomeEnum';
import {memo} from 'react';
import {Select} from '@/shared/ui/Select/Select';
import {Country} from '../model/consts/country';

interface CountrySelectProps {
	className?: string;
	selectedValue?: Country;
	onChange: (value: Country, name: string) => void;
	disabled?: boolean;
}

const options = [
	{value: Country.Armenia, content: Country.Armenia},
	{value: Country.Russia, content: Country.Russia},
	{value: Country.Ukraine, content: Country.Ukraine},
	{value: Country.Belarus, content: Country.Belarus},
	{value: Country.Kazakhstan, content: Country.Kazakhstan},
];

const isCountryEnum = isSomeEnum(Country);

export const CountrySelect = memo(({className, selectedValue, onChange, disabled}: CountrySelectProps) => {
	const {t} = useTranslation();
	const handleOptionChange = (value: string) => {
		if (isCountryEnum(value)) {
			onChange(value, 'country');
		}
	};

	return (
		<Select<Country>
			isDisabled={disabled}
			selectedValue={selectedValue}
			label={t('Страна')}
			className={classNames([className])}
			options={options}
			onChange={handleOptionChange}/>
	);
});

CountrySelect.displayName = 'CountrySelect';
