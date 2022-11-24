import module from './ProfileCard.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {selectProfileData, selectProfileError, selectProfileIsLoading} from '../../model/selectors';
import {useTranslation} from 'react-i18next';
import {Button, ButtonVariant} from 'shared/ui/Button/Button';
import {Input} from 'shared/ui/Input/Input';
import {Title} from 'shared/ui/Title/Title';

interface ProfileCardProps {
	className?: string;
}

export const ProfileCard = ({className}: ProfileCardProps) => {
	const {t} = useTranslation('profile');
	const profileData = useSelector(selectProfileData);
	const isLoading = useSelector(selectProfileIsLoading);
	const error = useSelector(selectProfileError);

	return (
		<div className={classNames([module.profileCard, className])}>
			<div className={module.header}>
				<Title>{t('Профиль')}</Title>
				<Button variant={ButtonVariant.OUTLINE}>
					{t('редактировать')}
				</Button>
			</div>
			<div className={module.content}>
				<Input placeholder={t('Имя')} value={profileData?.firstName ?? ''}/>
				<Input placeholder={t('Фамилия')} value={profileData?.lastName ?? ''}/>
			</div>
		</div>
	);
};
