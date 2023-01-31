import {classNames} from '@/shared/lib/classNames/classNames';
import {Suspense, useEffect} from 'react';
import './styles/index.css';

import {selectUserIsInit, userActions} from '@/entities/User';
import {Navbar} from '@/widgets/Navbar';
import {PageLoader} from '@/widgets/PageLoader';
import {Sidebar} from '@/widgets/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import {AppRouter} from './providers/router';

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
