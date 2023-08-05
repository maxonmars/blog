import {classNames} from '@/shared/lib/classNames/classNames';
import {Button} from '@/shared/ui/Button';
import {Card} from '@/shared/ui/Card';
import {DrawerMobile} from '@/shared/ui/DrawerMobile';
import {Input} from '@/shared/ui/Input';
import {Modal} from '@/shared/ui/Modal';
import {HStack, VStack} from '@/shared/ui/Stack';
import {StarRating} from '@/shared/ui/StarRating';
import {Text} from '@/shared/ui/Text';
import {Title} from '@/shared/ui/Title';
import {memo, useRef, useState} from 'react';
import {BrowserView, MobileView} from 'react-device-detect';
import {useTranslation} from 'react-i18next';
import module from './RatingCard.module.css';

interface RatingProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onRateSend: (starsCount: number, feedback?: string) => void;
	rate: number;
}

export const RatingCard = memo((props: RatingProps) => {
	const {className, rate, title, feedbackTitle, onRateSend, hasFeedback} = props;
	const {t} = useTranslation();

	const starsRateRef = useRef(0);

	const [isOpenModal, setIsOpenModal] = useState(false);
	const [feedback, setFeedback] = useState('');

	const handleRatingChange = (starsCount: number) => {
		starsRateRef.current = starsCount;
		if (hasFeedback) {
			setIsOpenModal(true);
		} else {
			onRateSend(starsCount);
		}
	};

	const handleModalClose = () => {
		setIsOpenModal(false);
		onRateSend(starsRateRef.current);
	};

	const handleSendBtn = () => {
		setIsOpenModal(false);
		onRateSend(starsRateRef.current, feedback);
	};

	return (
		<Card data-testid="RatingCard" className={classNames([module.ratingCard, className])}>
			<VStack>
				<Title order={4}>{rate ? t('Спасибо за оценку!') : title}</Title>
				<StarRating selectedStars={rate} onSelect={handleRatingChange}/>
			</VStack>
			<BrowserView>
				<Modal
					isOpened={isOpenModal}
					onClose={handleModalClose}
					title={'Оставьте отзыв'}>
					{onClose => <VStack>
						<Text>{feedbackTitle}</Text>
						<Input
							data-testid="RatingCard.Input"
							placeholder="Ваш отзыв"
							value={feedback}
							onChange={setFeedback}/>
						<HStack>
							<Button data-testid="RatingCard.Close" onClick={onClose()}>Закрыть</Button>
							<Button data-testid="RatingCard.Send" onClick={onClose(handleSendBtn)}>Отправить</Button>
						</HStack>
					</VStack>}
				</Modal>
			</BrowserView>
			<MobileView>
				<DrawerMobile isOpened={isOpenModal} onClose={handleModalClose}>
					{onClose => <VStack gap="0.5">
						<Text>{feedbackTitle}</Text>
						<Input
							placeholder="Ваш отзыв"
							value={feedback}
							onChange={setFeedback}/>
						<Button onClick={onClose(handleSendBtn)}>
							Отправить
						</Button>
					</VStack>}
				</DrawerMobile>
			</MobileView>
		</Card>
	);
});

RatingCard.displayName = 'RatingCard';
