import module from './LangSwitcher.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Button, ButtonTheme} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const {t, i18n} = useTranslation('translation');

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    }

    return (
        <Button
            onClick={onToggle}
            theme={ButtonTheme.CLEAR}
            className={classNames([module.langSwitcher, className])}
        >
            {t('Язык')}
        </Button>
    );
};