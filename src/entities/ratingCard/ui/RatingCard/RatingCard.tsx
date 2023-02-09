import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import module from './RatingCard.module.css';
import {memo, useRef, useState} from 'react';
import {Card} from '@/shared/ui/Card';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Title} from '@/shared/ui/Title';
import {StarRating} from '@/shared/ui/StarRating';
import {BrowserView, MobileView} from 'react-device-detect';
import {Modal} from '@/shared/ui/Modal';
import {Button} from '@/shared/ui/Button';
import {Text} from '@/shared/ui/Text';
import {Input} from '@/shared/ui/Input';
import {DrawerMobile} from '@/shared/ui/DrawerMobile';

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
		<Card className={classNames([module.ratingCard, className])}>
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
							placeholder="Ваш отзыв"
							value={feedback}
							onChange={setFeedback}/>
						<HStack>
							<Button onClick={onClose()}>Закрыть</Button>
							<Button onClick={onClose(handleSendBtn)}>Отправить</Button>
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
