import {PageLoader} from '@/widgets/PageLoader';
import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import {routes} from '../config/routeConfig';
import {RequireAuth} from './RequireAuth';

export const AppRouter = () => {
	const withRequireAuthRoutes = routes.map(route => {
		return {
			...route,
			element: route.authOnly
				? <RequireAuth roles={route.roles} key={route.path}>{route.element}</RequireAuth>
				: route.element,
		};
	});

	const appRoutes = useRoutes(withRequireAuthRoutes);

	return (
		<Suspense fallback={<PageLoader/>}>
			{appRoutes}
		</Suspense>
	);
};
