import './styles/index.css';
import React, {Suspense} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';

import {Navbar} from 'widgets/Navbar';
import {AppRouter} from 'app/providers/router';
import {useTheme} from 'shared/lib/theme';
import {Sidebar} from 'widgets/Sidebar';
import {PageLoader} from 'widgets/PageLoader';

export const App = () => {
	const {theme} = useTheme();

	return (
		<div className={classNames(['app', 'app-layout', theme])}>
			<Suspense fallback={<PageLoader className="app-suspense-loader"/>}>
				<Navbar/>
				<Sidebar/>
				<AppRouter/>
			</Suspense>
		</div>
	);
};
