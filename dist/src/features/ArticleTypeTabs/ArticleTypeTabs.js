import { jsx as _jsx } from "react/jsx-runtime";
import module from './ArticleTypeTabs.module.css';
import { classNames } from 'shared/lib/classNames/classNames';
import { Tabs } from 'shared/ui/Tabs/Tabs';
import { ArticleType } from 'entities/Article/model/types/article';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
export var ArticleTypeTabs = function (_a) {
    var className = _a.className, onTabChange = _a.onTabChange, selectedType = _a.selectedType;
    var t = useTranslation().t;
    var tabs = useMemo(function () {
        return [
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
        ];
    }, [t]);
    var handleTabChange = function (tab) {
        onTabChange(tab.value);
    };
    return (_jsx(Tabs, { className: classNames([module.ArticleTypeTabs, className]), tabs: tabs, selectedValue: selectedType, onTabClick: handleTabChange }));
};
//# sourceMappingURL=ArticleTypeTabs.js.map