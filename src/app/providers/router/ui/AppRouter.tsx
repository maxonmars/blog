import {Suspense} from 'react';
import {useRoutes} from 'react-router-dom';
import {routes} from 'app/providers/router/config/routeConfig';
import {PageLoader} from 'widgets/PageLoader';

export const AppRouter = () => {
	const appRoutes = useRoutes(routes);

	return (
		<Suspense fallback={<PageLoader/>}>
			{appRoutes}
		</Suspense>
	);
};
