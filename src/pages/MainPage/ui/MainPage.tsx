import {useTranslation} from 'react-i18next';

interface MainPageProps {
	className?: string;
}

const MainPage = ({className}: MainPageProps) => {
	const {t} = useTranslation('mainPage');

	return (
		<div>
			{t('mainPage:Главная')}
		</div>
	);
};

export default MainPage;
