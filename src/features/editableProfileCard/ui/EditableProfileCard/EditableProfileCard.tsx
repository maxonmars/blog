import {classNames} from '@/shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {
	selectEditableProfileData,
	selectProfileError,
	selectProfileIsLoading,
	selectProfileValidateErrors,
} from '../../model/selectors';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from '@/shared/ui/Button/Button';
import {Title} from '@/shared/ui/Title/Title';
import {Text, TextSize, TextVariant} from '@/shared/ui/Text/Text';
import {selectProfileIsReadonly} from '../../model/selectors/selectProfileIsReadonly/selectProfileIsReadonly';
import {editableProfileCardActions, editableProfileCardReducer} from '../../model/slices/editableProfileCardSlice';
import {memo, useCallback} from 'react';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';
import {useAppDispatch} from '@/shared/hooks';
import {selectUserAuthData} from '@/entities/User';
import {ProfileCard} from '@/entities/Profile';
import module from './EditableProfileCard.module.css';
import {useInitialEffect} from '@/shared/hooks/useInitialEffect/useInitialEffect';
import {fetchProfileData} from '../../model/services/fetchProfileData/fetchProfileData';
import {HStack, VStack} from '@/shared/ui/Stack';
import type {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

interface EditableProfileCardProps {
	className?: string;
	idProfile?: string;
}

const reducers: ReducersList = {
	profile: editableProfileCardReducer,
};

export const EditableProfileCard = memo(({className, idProfile}: EditableProfileCardProps) => {
	const {t} = useTranslation('profile');

	const dispatch = useAppDispatch();

	const profileData = useSelector(selectEditableProfileData);
	const authData = useSelector(selectUserAuthData);
	const isLoading = useSelector(selectProfileIsLoading);
	const error = useSelector(selectProfileError);
	const isReadonly = useSelector(selectProfileIsReadonly);

	useInitialEffect(useCallback(() => {
		void dispatch(fetchProfileData(idProfile));
	}, [dispatch, idProfile]));

	const isEdit = authData?.id === profileData?.id;

	const validateErrors = useSelector(selectProfileValidateErrors);

	const handleProfileEditable = useCallback(() => {
		dispatch(editableProfileCardActions.editableProfileForm());
	}, [dispatch]);

	const handleProfileDataEditCancel = useCallback(() => {
		dispatch(editableProfileCardActions.cancelEditProfile());
	}, [dispatch]);

	const handleProfileDataEdit = useCallback((value: string | number, name: string) => {
		dispatch(editableProfileCardActions.editProfile({[name]: value}));
	}, [dispatch]);

	const handleProfileSubmit = useCallback(() => {
		void dispatch(updateProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<VStack gap="2" className={classNames([module.editableProfileCard, className])}>
				<HStack gap="1">
					<Title>{t('Профиль')}</Title>
					{isEdit
					&& (isReadonly
						? (
							<Button
								data-testid="EditableProfileCard.editButton"
								variant={ButtonVariant.OUTLINE}
								onClick={handleProfileEditable}>
								{t('редактировать')}
							</Button>)
						: (
							<>
								<Button
									data-testid="EditableProfileCard.cancelButton"
									variant={ButtonVariant.OUTLINE}
									onClick={handleProfileDataEditCancel}>
									{t('отменить')}
								</Button>
								<Button
									data-testid="EditableProfileCard.saveButton"
									variant={ButtonVariant.FILLED}
									onClick={handleProfileSubmit}>
									{t('сохранить')}
								</Button>
							</>))
					}
				</HStack>
				{validateErrors?.length
				&& (
					<div>
						{validateErrors.map(error => {
							return (
								<Text
									data-testid="EditableProfileCard.error"
									variant={TextVariant.RED}
									size={TextSize.SM}
									key={error}>
									{error}
								</Text>
							);
						})}
					</div>)}
				<ProfileCard
					onProfileDataEdit={handleProfileDataEdit}
					profileData={profileData}
					isLoading={isLoading}
					isReadonly={isReadonly}
					error={error}/>
			</VStack>
		</DynamicModuleLoader>
	);
});

EditableProfileCard.displayName = 'EditableProfileCard';
