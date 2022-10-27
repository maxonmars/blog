import './styles/index.css';
import React, {Suspense, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';
import {useDispatch} from 'react-redux';
import {userActions} from 'entities/User';

export const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(userActions.initAuthData());
	}, [dispatch]);
	return (
		<div className={classNames(['app', 'app-layout'])}>
			<Suspense fallback={<PageLoader className="app-suspense-loader"/>}>
				<Navbar/>
				<Sidebar/>
				<AppRouter/>
			</Suspense>
		</div>
	);
};
