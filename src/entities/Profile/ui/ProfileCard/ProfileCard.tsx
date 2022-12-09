import module from './ProfileCard.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useDispatch, useSelector} from 'react-redux';
import {
	selectEditableProfileData,
	selectProfileError,
	selectProfileIsLoading,
	selectProfileValidateErrors,
} from '../../model/selectors';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {Title} from 'shared/ui/Title/Title';
import {Loader} from 'shared/ui/Loader/Loader';
import {Text, TextSize, TextVariant} from 'shared/ui/Text/Text';
import {selectProfileIsReadonly} from '../../model/selectors/selectProfileIsReadonly/selectProfileIsReadonly';
import {profileActions} from '../../model/slice/profileSlice';
import {useCallback} from 'react';
import {ProfileField} from '../../model/types/profile';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';
import {useAppDispatch} from 'shared/hooks';
import {Avatar, AvatarSize} from 'shared/ui/Avatar/Avatar';
import {CurrencySelect} from 'entities/Currency';
import {CountrySelect} from 'entities/Country';
import {selectUserAuthData} from 'entities/User';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
	const {t} = useTranslation('profile');
	const dispatch = useAppDispatch();
	const profileData = useSelector(selectEditableProfileData);
	const authData = useSelector(selectUserAuthData);
	const isLoading = useSelector(selectProfileIsLoading);
	const error = useSelector(selectProfileError);
	const isReadonly = useSelector(selectProfileIsReadonly);

	const isEdit = authData?.id === profileData?.id;

	const validateErrors = useSelector(selectProfileValidateErrors);

	const handleProfileEditable = useCallback(() => {
		dispatch(profileActions.editableProfileForm());
	}, [dispatch]);

	const handleProfileDataEditCancel = useCallback(() => {
		dispatch(profileActions.cancelEditProfile());
	}, [dispatch]);

	const handleProfileDataEdit = useCallback((value: string | number, name: string) => {
		dispatch(profileActions.editProfile({[name]: value}));
	}, [dispatch]);

	const handleProfileSubmit = useCallback(() => {
		void dispatch(updateProfileData());
	}, [dispatch]);

	if (isLoading) {
		return (
			<div className={classNames([module.profileCard, className])}>
				<Loader/>
			</div>
		);
	}

	if (error) {
		return (
			<div className={classNames([module.profileCard, className])}>
				<Title order={3}>{t('Произошла ошибка')}</Title>
				<Text variant={TextVariant.RED}>{t('Попробуйте обновить страницу')}</Text>
			</div>
		);
	}

	return (
		<div className={classNames([module.profileCard, className])}>
			<div className={module.header}>
				<Title>{t('Профиль')}</Title>
				{isEdit
					&& (isReadonly
						? (
							<Button
								variant={ButtonVariant.OUTLINE}
								onClick={handleProfileEditable}>
								{t('редактировать')}
							</Button>)
						: (
							<>
								<Button
									variant={ButtonVariant.OUTLINE}
									onClick={handleProfileDataEditCancel}>
									{t('отменить')}
								</Button>
								<Button
									variant={ButtonVariant.FILLED}
									onClick={handleProfileSubmit}>
									{t('сохранить')}
								</Button>
							</>))
				}
			</div>
			{validateErrors?.length
				&& (
					<div>
						{validateErrors.map(error => {
							return (
								<Text variant={TextVariant.RED} size={TextSize.SM} key={error}>{error}</Text>
							);
						})}
					</div>)}
			<div className={module.content}>
				<Avatar src={profileData?.avatar} size={AvatarSize.MD} alt="аватар пользователя"/>
				<Input
					label={t('Имя')}
					value={profileData?.firstName}
					readOnly={isReadonly}
					name={ProfileField.FIRST_NAME}
					onChange={handleProfileDataEdit}
				/>
				<Input
					label={t('Фамилия')}
					value={profileData?.lastName}
					readOnly={isReadonly}
					name={ProfileField.LAST_NAME}
					onChange={handleProfileDataEdit}
				/>
				<Input
					label={t('Возраст')}
					value={profileData?.age}
					readOnly={isReadonly}
					name={ProfileField.AGE}
					onChange={handleProfileDataEdit}
				/>
				<Input
					label={t('Город')}
					value={profileData?.city}
					readOnly={isReadonly}
					name={ProfileField.CITY}
					onChange={handleProfileDataEdit}
				/>
				<Input
					value={profileData?.username}
					readOnly={isReadonly}
					name={ProfileField.USERNAME}
					onChange={handleProfileDataEdit}
					label={t('Юзернейм')}
				/>
				<Input
					value={profileData?.avatar}
					readOnly={isReadonly}
					name={ProfileField.AVATAR}
					onChange={handleProfileDataEdit}
					label={t('Фото')}
				/>
				<CurrencySelect
					selectedValue={profileData?.currency}
					disabled={isReadonly}
					onChange={handleProfileDataEdit}/>
				<CountrySelect
					onChange={handleProfileDataEdit}
					selectedValue={profileData?.country}
					disabled={isReadonly}/>
			</div>
		</div>
	);
};
