import module from './ProfilePage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {EditableProfileCard} from 'features/editableProfileCard';
import {useParams} from 'react-router-dom';
import {Title} from 'shared/ui/Title/Title';
import {useTranslation} from 'react-i18next';

const ProfilePage = () => {
	const {t} = useTranslation('profile');
	const {id} = useParams<{id: string}>();

	if (!id) {
		return <Title>{t('Профиль не найден')}</Title>;
	}

	return (
		<div className={classNames([module.profilePage])}>
			<EditableProfileCard idProfile={id}/>
		</div>
	);
};

export default ProfilePage;
