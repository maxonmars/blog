import {useTranslation} from "react-i18next";

const MainPage = () => {
    const {t, i18n} = useTranslation('mainPage')
    i18n.setDefaultNamespace('mainPage')

    return (
        <div>
            {t('Главная')}
            {t('Подглавная')}
        </div>
    );
};

export default MainPage;