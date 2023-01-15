import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import module from './Rating.module.css';
import {memo, useState} from 'react';
import {Card} from '@/shared/ui/Card/Card';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Title} from '@/shared/ui/Title/Title';
import {StarRating} from '@/shared/ui/StarRating/StarRating';
import {BrowserView, MobileView} from 'react-device-detect';
import {Modal} from '@/shared/ui/Modal/Modal';
import {Button} from '@/shared/ui/Button/Button';
import {Text} from '@/shared/ui/Text/Text';
import {Input} from '@/shared/ui/Input/Input';
import {DrawerMobile} from '@/shared/ui/DrawerMobile/DrawerMobile';

interface RatingProps {
	className?: string;
	title?: string;
	feedbackTitle?: string;
	hasFeedback?: boolean;
	onFeedbackSend?: (feedback?: string) => void;
	onRateSend: (starsCount: number) => void;
	rate?: number;
}

export const Rating = memo((props: RatingProps) => {
	const {className, rate = 0, title, feedbackTitle, onRateSend, hasFeedback, onFeedbackSend} = props;
	const {t} = useTranslation();

	const [starsCount, setStarsCount] = useState(rate);
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [feedback, setFeedback] = useState('');

	const handleRatingChange = (starsCount: number) => {
		setStarsCount(starsCount);
		if (hasFeedback) {
			setIsOpenModal(true);
		} else {
			onRateSend(starsCount);
		}
	};

	const handleModalClose = () => {
		setIsOpenModal(false);
		onRateSend(starsCount);
	};

	const handleFeedbackSend = () => {
		onFeedbackSend?.(feedback);
	};

	return (
		<Card className={classNames([module.rating, className])}>
			<VStack>
				<Title order={4}>{starsCount ? t('Спасибо за оценку!') : title}</Title>
				<StarRating selectedStars={starsCount} onSelect={handleRatingChange}/>
			</VStack>
			<BrowserView>
				<Modal
					isOpened={isOpenModal}
					onClose={handleModalClose}
					title={'Оставьте отзыв'}>
					{onClose => (
						<VStack>
							<Text>{feedbackTitle}</Text>
							<Input
								placeholder="Ваш отзыв"
								value={feedback}
								onChange={setFeedback}/>
							<HStack>
								<Button onClick={onClose}>
									Закрыть
								</Button>
								<Button
									onClick={() => {
										onClose();
										handleFeedbackSend();
									}}>
									Отправить
								</Button>
							</HStack>
						</VStack>)}
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
						<Button onClick={
							() => {
								onClose();
								handleFeedbackSend();
							}}>
							Отправить
						</Button>
					</VStack>}
				</DrawerMobile>
			</MobileView>
		</Card>
	);
});

Rating.displayName = 'Rating';
