import module from './ProfilePage.module.css';
import {classNames} from 'shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import type {ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {DynamicModuleLoader} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {fetchProfileData, ProfileCard, profileReducer} from 'entities/Profile';
import {useCallback, useEffect} from 'react';
import {useAppDispatch} from 'shared/hooks';
import {useInitialEffect} from 'shared/hooks/useInitialEffect/useInitialEffect';
import {useParams} from 'react-router-dom';

const reducers: ReducersList = {
	profile: profileReducer,
};

const ProfilePage = () => {
	const {t} = useTranslation();
	const dispatch = useAppDispatch();
	const {id} = useParams<{id: string}>();

	useInitialEffect(useCallback(() => {
		void dispatch(fetchProfileData(id));
	}, [dispatch, id]));

	return (
		<DynamicModuleLoader reducers={reducers} isRemoveAfterUnmount>
			<div className={classNames([module.profilePage])}>
				<ProfileCard/>
			</div>
		</DynamicModuleLoader>
	);
};

export default ProfilePage;
