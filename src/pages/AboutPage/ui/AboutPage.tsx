import {useTranslation} from 'react-i18next';

const AboutPage = () => {
	const {t} = useTranslation('aboutPage');

	return (
		<div data-testid="AboutPage">
			{t('aboutPage:О_сайте')}
		</div>
	);
};

export default AboutPage;
