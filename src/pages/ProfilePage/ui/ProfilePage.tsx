import module from './ProfilePage.module.css';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useParams} from 'react-router-dom';
import {EditableProfileCard} from '@/features/editableProfileCard';

const ProfilePage = () => {
	const {id} = useParams<{id: string}>();

	return (
		<div className={classNames([module.profilePage])}>
			<EditableProfileCard idProfile={id}/>
		</div>
	);
};

export default ProfilePage;
