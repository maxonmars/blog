import module from './ProfilePage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {profileReducer} from 'entities/Profile';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const {t} = useTranslation();
	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<div className={classNames([module.profilePage, className])}>
				{t('PROFILE PAGE')}
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
