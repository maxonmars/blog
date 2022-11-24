import module from './ProfilePage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useEffect} from 'react';
import {useAppDispatch} from 'shared/hooks';

const reducers: ReducersList = {
	profile: profileReducer,
};

interface ProfilePageProps {
	className?: string;
}

const ProfilePage = ({className}: ProfilePageProps) => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();

	useEffect(() => {
		void dispatch(fetchProfileData());
	}, [dispatch]);

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<div className={classNames([module.profilePage, className])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
