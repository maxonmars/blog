import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {Input} from 'shared/ui/Input/Input';
import {Title} from 'shared/ui/Title/Title';
import {Loader} from 'shared/ui/Loader/Loader';
import {Text, TextVariant} from 'shared/ui/Text/Text';
import type {Profile} from '../../model/types/profile';
import {Avatar, AvatarSize} from 'shared/ui/Avatar/Avatar';
import {CurrencySelect} from 'entities/Currency';
import {CountrySelect} from 'entities/Country';
import {VStack} from 'shared/ui/Stack';
import {ProfileField} from '../../model/consts/profile';

interface ProfileCardProps {
	className?: string;
	onProfileDataEdit: (value: string | number, name: string) => void;
	profileData?: Profile;
	isLoading?: boolean;
	error?: string;
	isReadonly?: boolean;
}

export const ProfileCard = ({className, onProfileDataEdit, profileData, isLoading, isReadonly, error}: ProfileCardProps) => {
	const {t} = useTranslation('profile');

	if (isLoading) {
		return (
			<VStack className={classNames([className])}>
				<Loader/>
			</VStack>
		);
	}

	if (error) {
		return (
			<VStack gap="1" className={classNames([className])}>
				<Title order={3}>{t('Произошла ошибка')}</Title>
				<Text variant={TextVariant.RED}>{t('Попробуйте обновить страницу')}</Text>
			</VStack>
		);
	}

	return (
		<VStack gap="1" className={classNames([className])}>
			<Avatar src={profileData?.avatar} size={AvatarSize.MD} alt="аватар пользователя"/>
			<Input
				label={t('Имя')}
				value={profileData?.firstName}
				readOnly={isReadonly}
				name={ProfileField.FIRST_NAME}
				onChange={onProfileDataEdit}
				data-testid="ProfileCard.firstName"
			/>
			<Input
				label={t('Фамилия')}
				value={profileData?.lastName}
				readOnly={isReadonly}
				name={ProfileField.LAST_NAME}
				onChange={onProfileDataEdit}
				data-testid="ProfileCard.lastName"
			/>
			<Input
				label={t('Возраст')}
				value={profileData?.age}
				readOnly={isReadonly}
				name={ProfileField.AGE}
				onChange={onProfileDataEdit}
			/>
			<Input
				label={t('Город')}
				value={profileData?.city}
				readOnly={isReadonly}
				name={ProfileField.CITY}
				onChange={onProfileDataEdit}
			/>
			<Input
				value={profileData?.username}
				readOnly={isReadonly}
				name={ProfileField.USERNAME}
				onChange={onProfileDataEdit}
				label={t('Юзернейм')}
			/>
			<Input
				value={profileData?.avatar}
				readOnly={isReadonly}
				name={ProfileField.AVATAR}
				onChange={onProfileDataEdit}
				label={t('Фото')}
			/>
			<CurrencySelect
				selectedValue={profileData?.currency}
				disabled={isReadonly}
				onChange={onProfileDataEdit}/>
			<CountrySelect
				onChange={onProfileDataEdit}
				selectedValue={profileData?.country}
				disabled={isReadonly}/>
		</VStack>
	);
};
