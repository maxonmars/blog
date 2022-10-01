import {useTranslation} from "react-i18next";

const AboutPage = () => {
    const {t, i18n} = useTranslation('aboutPage')
    i18n.setDefaultNamespace('aboutPage')

    return (
        <div>
            {t('О сайте')}
            {t('Абаут')}
        </div>
    );
};

export default AboutPage;