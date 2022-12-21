import './styles/index.css';
import React, {Suspense, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';
import {useDispatch, useSelector} from 'react-redux';
import {userActions} from 'entities/User';
import {selectUserIsInit} from 'entities/User/model/selectors/selectUserIsInit';

export const App = () => {
	const dispatch = useDispatch();
	const isInit = useSelector(selectUserIsInit);

	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);

	return (
		<div className={classNames(['app', 'app-layout'])}>
			<Suspense fallback={<PageLoader className="app-suspense-loader"/>}>
				<Navbar/>
				<Sidebar/>
				<div className="page-wrapper">
					{isInit && <AppRouter/>}
				</div>
			</Suspense>
		</div>
	);
};
