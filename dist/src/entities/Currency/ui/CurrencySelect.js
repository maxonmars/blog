import { jsx as _jsx } from "react/jsx-runtime";
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { Currency } from 'entities/Currency/model/types/currency';
import { isSomeEnum } from 'shared/lib/isSomeEnum/isSomeEnum';
import { memo } from 'react';
var options = [
    { label: Currency.EUR, value: Currency.EUR },
    { label: Currency.RUB, value: Currency.RUB },
    { label: Currency.USD, value: Currency.USD },
];
var isCurrencyEnum = isSomeEnum(Currency);
export var CurrencySelect = memo(function (_a) {
    var className = _a.className, selectedValue = _a.selectedValue, onChange = _a.onChange, disabled = _a.disabled;
    var t = useTranslation().t;
    var handleOptionChange = function (value) {
        if (isCurrencyEnum(value)) {
            onChange(value, 'currency');
        }
    };
    return (_jsx(Select, { className: classNames([className]), label: t('Валюта'), options: options, disabled: disabled, selectedValue: selectedValue, onChange: handleOptionChange }));
});
CurrencySelect.displayName = 'CurrencySelect';
//# sourceMappingURL=CurrencySelect.js.map