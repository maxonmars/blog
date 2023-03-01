import {useTranslation} from 'react-i18next';

const MainPage = () => {
	const {t} = useTranslation('mainPage');

	return (
		<div data-testid="MainPage">
			{t('mainPage:Главная')}
		</div>
	);
};

export default MainPage;
