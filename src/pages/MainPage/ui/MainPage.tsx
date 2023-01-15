import {useTranslation} from 'react-i18next';
import {useState} from 'react';
import {Rating} from '@/entities/rating';

const MainPage = () => {
	const {t} = useTranslation('mainPage');
	const [stars, setStars] = useState(2);
	const handleStarsChange = (starCount: number) => {
		setStars(starCount);
	};

	return (
		<div>
			{t('mainPage:Главная')}
			<Rating
				rate={stars}
				feedbackTitle="Напишите отзыв о статье"
				onRateSend={handleStarsChange}
				hasFeedback
				title="Поставьте оценку статье"/>
		</div>
	);
};

export default MainPage;
