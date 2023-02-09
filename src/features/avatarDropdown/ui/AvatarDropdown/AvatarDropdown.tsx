import {selectUserAuthData, selectUserIsAdmin, selectUserIsManager, userActions} from '@/entities/User';
import {ROUTE_PATH} from '@/shared/const/router';
import {Avatar} from '@/shared/ui/Avatar';
import type {DropdownItem} from '@/shared/ui/Dropdown';
import {Dropdown} from '@/shared/ui/Dropdown';
import {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';

interface AvatarDropdownProps {
	className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
	const {className} = props;
	const dispatch = useDispatch();
	const {t} = useTranslation();

	const authData = useSelector(selectUserAuthData);
	const isAdmin = useSelector(selectUserIsAdmin);
	const isManager = useSelector(selectUserIsManager);

	const handleLogout = () => {
		dispatch(userActions.logout());
	};

	const dropdownUserItems: DropdownItem[] = [
		{content: t('Выйти'), onClick: handleLogout},
		{content: t('Профиль'), href: `${ROUTE_PATH.PROFILE}${authData?.id ?? ''}`},
	];

	const dropdownAdminItems: DropdownItem[] = [
		{content: t('Админка'), href: ROUTE_PATH.ADMIN},
		...dropdownUserItems,
	];

	const isAdminPageAvailable = isAdmin || isManager;

	const dropdownItems: DropdownItem[] = [
		...(isAdminPageAvailable
			? dropdownAdminItems
			: dropdownUserItems),
	];

	return (
		<Dropdown
			className={className}
			placement="bottom-start"
			items={dropdownItems}
			trigger={<Avatar src={authData?.avatar}/>}/>
	);
});

AvatarDropdown.displayName = 'AvatarDropdown';
