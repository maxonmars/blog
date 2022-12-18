var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import module from './ArticleSortSelector.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { useTranslation } from 'react-i18next';
import { ArticleSortField } from 'entities/Article';
export var ArticleSortSelector = function (_a) {
    var className = _a.className, sort = _a.sort, order = _a.order, onChangeSortField = _a.onChangeSortField, onChangeOrder = _a.onChangeOrder;
    var t = useTranslation().t;
    var sortFieldOptions = [
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
    var orderOptions = [
        {
            label: t('возрастанию'),
            value: 'desc',
        },
        {
            label: t('убыванию'),
            value: 'asc',
        },
    ];
    return (_jsxs("div", __assign({ className: classNames([module.articleSortSelector, className]) }, { children: [_jsx(Select, { className: module.sortBy, selectedValue: sort, label: t('Сортировать по'), options: sortFieldOptions, onChange: onChangeSortField }), _jsx(Select, { className: module.sortBy, selectedValue: order, label: t('По'), options: orderOptions, onChange: onChangeOrder })] })));
};
//# sourceMappingURL=ArticleSortSelector.js.map