import module from './NotificationsButton.module.css';
import React, {memo} from 'react';
import {Popover} from 'shared/ui/Popover/Popover';
import {IcoThinBell} from 'shared/assets/icons';
import {NotificationList} from 'entities/notification';

interface NotificationsButtonProps {
	className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
	const {className} = props;

	return (
		<Popover
			className={className}
			trigger={<IcoThinBell width={20}/>}>
			<NotificationList className={module.notificationList}/>
		</Popover>
	);
});

NotificationsButton.displayName = 'NotificationsButton';
