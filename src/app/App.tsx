import './styles/index.css';
import React, {Suspense} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';

export const App = () => {
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
