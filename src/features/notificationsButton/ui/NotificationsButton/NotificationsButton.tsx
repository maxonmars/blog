import module from './NotificationsButton.module.css';
import React, {memo, useState} from 'react';
import {Popover} from '@/shared/ui/Popover/Popover';
import {IcoThinBell} from '@/shared/assets/icons';
import {NotificationList} from '@/entities/notification';
import {BrowserView, MobileView} from 'react-device-detect';
import {Button, ButtonSize, ButtonVariant} from '@/shared/ui/Button/Button';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DrawerMobile} from '@/shared/ui/DrawerMobile/DrawerMobile';

interface NotificationsButtonProps {
	className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
	const {className} = props;

	return (
		<>
			<BrowserView>
				<Popover
					className={className}
					trigger={<IcoThinBell width={20}/>}>
					<NotificationList
						className={classNames(
							[
								module.notificationList,
								module.popoverNotificationList,
							])}/>
				</Popover>
			</BrowserView>

			<MobileView>
				<DrawerMobile
					target={
						onClick => (
							<Button
								onClick={onClick}
								variant={ButtonVariant.SUBTLE}
								size={ButtonSize.SM}
								inverted
								square>
								<IcoThinBell width={20}/>
							</Button>)
					}>
					<NotificationList
						className={classNames(
							[
								module.notificationList,
								module.drawerNotificationList,
							])}/>
				</DrawerMobile>
			</MobileView>
		</>
	);
});

NotificationsButton.displayName = 'NotificationsButton';
