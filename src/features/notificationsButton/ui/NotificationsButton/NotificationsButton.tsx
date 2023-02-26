import module from './NotificationsButton.module.css';
import {memo, useState} from 'react';
import {Popover} from '@/shared/ui/Popover';
import {IcoThinBell} from '@/shared/assets/icons';
import {NotificationList} from '@/entities/notification';
import {BrowserView, MobileView} from 'react-device-detect';
import {Button, ButtonSize, ButtonVariant} from '@/shared/ui/Button';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DrawerMobile} from '@/shared/ui/DrawerMobile';

interface NotificationsButtonProps {
	className?: string;
}

export const NotificationsButton = memo((props: NotificationsButtonProps) => {
	const {className} = props;
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleDrawerOpen = () => {
		setIsDrawerOpen(true);
	};

	const handleDrawerClose = () => {
		setIsDrawerOpen(false);
	};

	return (
		<>
			<BrowserView>
				<Popover
					className={module.popoverNotificationButton}
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
				<DrawerMobile isOpened={isDrawerOpen} onClose={handleDrawerClose}>
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
