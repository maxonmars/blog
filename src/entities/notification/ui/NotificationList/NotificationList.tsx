import {useNotifications} from '../../api/notificationApi';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {VStack} from '@/shared/ui/Stack';
import {Title} from '@/shared/ui/Title/Title';
import {useTranslation} from 'react-i18next';
import {NotificationItem} from '../NotificationItem/NotificationItem';

interface NotificationListProps {
	className?: string;
}

export const NotificationList = ({className}: NotificationListProps) => {
	const {t} = useTranslation();
	const {data: notificationList, isLoading} = useNotifications(undefined,
		{
			pollingInterval: 5000,
		});

	if (isLoading) {
		return (
			<VStack gap="0.5" className={className}>
				<Skeleton width={259} height={81}/>
				<Skeleton width={259} height={81}/>
				<Skeleton width={259} height={81}/>
			</VStack>
		);
	}

	if (!notificationList || !notificationList?.length) {
		return (
			<VStack gap="0.5" className={className}>
				<Title order={3}>{t('Уведомления отсутствуют')}</Title>
			</VStack>
		);
	}

	return (
		<VStack gap="0.5" className={className}>
			{notificationList.map(notification => {
				return (
					<NotificationItem
						key={notification.id}
						notification={notification}/>
				);
			})}
		</VStack>
	);
};
