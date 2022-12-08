import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { isSomeEnum } from 'shared/lib/isSomeEnum/isSomeEnum';
import { Country } from 'entities/Country/model/types/country';
import { memo } from 'react';
var options = [
    { label: Country.Armenia, value: Country.Armenia },
    { label: Country.Russia, value: Country.Russia },
    { label: Country.Ukraine, value: Country.Ukraine },
    { label: Country.Belarus, value: Country.Belarus },
    { label: Country.Kazakhstan, value: Country.Kazakhstan },
];
var isCountryEnum = isSomeEnum(Country);
export var CountrySelect = memo(function (_a) {
    var className = _a.className, selectedValue = _a.selectedValue, onChange = _a.onChange, disabled = _a.disabled;
    var t = useTranslation().t;
    var handleOptionChange = function (value) {
        if (isCountryEnum(value)) {
            onChange(value, 'country');
        }
    };
    return _jsx(Select, { className: classNames([className]), label: t('Страна'), options: options, disabled: disabled, selectedValue: selectedValue, onChange: handleOptionChange });
});
CountrySelect.displayName = 'CountrySelect';
//# sourceMappingURL=CountrySelect.js.map