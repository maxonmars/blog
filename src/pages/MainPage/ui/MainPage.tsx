import {useTranslation} from 'react-i18next';

const MainPage = () => {
	const {t} = useTranslation('mainPage');

	return (
		<div data-testid="MainPage">
			{t('Главная')}
		</div>
	);
};

export default MainPage;
