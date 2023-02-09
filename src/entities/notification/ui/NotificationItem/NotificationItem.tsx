import {classNames} from '@/shared/lib/classNames/classNames';
import module from './NotificationItem.module.css';
import {memo} from 'react';
import {Card, CardVariant} from '@/shared/ui/Card';
import type {Notification} from '../../model/types/notification';
import {Title} from '@/shared/ui/Title';
import {Text} from '@/shared/ui/Text';
import {AppLink} from '@/shared/ui/AppLink';

interface NotificationItemProps {
	className?: string;
	notification: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
	const {className, notification} = props;

	const content = (
		<Card
			variant={CardVariant.OUTLINE}
			className={classNames([module.notificationItem, className])}>
			<Title order={2}>{notification.title}</Title>
			<Text>{notification.description}</Text>
		</Card>

	);

	if (notification.href) {
		return (
			<AppLink target="__blank" to={notification.href}>
				{content}
			</AppLink>
		);
	}

	return content;
});

NotificationItem.displayName = 'NotificationItem';
