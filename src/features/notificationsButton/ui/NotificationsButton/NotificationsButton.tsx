import module from './NotificationsButton.module.css';
import React, {memo, useState} from 'react';
import {Popover} from 'shared/ui/Popover/Popover';
import {IcoThinBell} from 'shared/assets/icons';
import {NotificationList} from 'entities/notification';
import {Drawer} from 'shared/ui/Drawer/Drawer';
import {BrowserView, MobileView} from 'react-device-detect';
import {Button, ButtonSize, ButtonVariant} from 'shared/ui/Button/Button';
import {classNames} from 'shared/lib/classNames/classNames';

interface NotificationsButtonProps {
	className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
	const {className} = props;
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleDrawerClose = () => {
		setIsDrawerOpen(false);
	};

	const handleDrawerOpen = () => {
		setIsDrawerOpen(true);
	};

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
				<Button
					onClick={handleDrawerOpen}
					variant={ButtonVariant.SUBTLE}
					size={ButtonSize.SM}
					inverted
					square>
					<IcoThinBell width={20}/>
				</Button>
				<Drawer
					title={'DSD'}
					isOpened={isDrawerOpen}
					onClose={handleDrawerClose}>
					<NotificationList
						className={classNames(
							[
								module.notificationList,
								module.drawerNotificationList,
							])}/>
				</Drawer>
			</MobileView>
		</>
	);
});

NotificationsButton.displayName = 'NotificationsButton';
