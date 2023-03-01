import {componentRender} from '@/shared/lib/tests/componentRender/componentRender';
import {AppRouter} from './AppRouter';
import {getRouteAbout, getRouteAdmin, getRouteProfile} from '@/shared/const/router';
import {screen} from '@testing-library/react';
import {UserRoles} from '@/entities/User';

describe('app/router/AppRouter', () => {
	test('should be page render', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteAbout(),
		});

		const page = await screen.findByTestId('AboutPage');
		expect(page).toBeInTheDocument();
	});
	test('should be page not found', async () => {
		componentRender(<AppRouter/>, {
			route: '/errorRoute',
		});

		const page = await screen.findByTestId('NotFoundPage');
		expect(page).toBeInTheDocument();
	});
	test('should be redirect MainPage for no auth user', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteProfile('1'),
		});

		const page = await screen.findByTestId('MainPage');
		expect(page).toBeInTheDocument();
	});
	test('should be render ProfilePage page for auth user', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteProfile('1'),
			initialState: {
				user: {authData: {id: '1'}, isInit: true},
			},
		});

		const page = await screen.findByTestId('ProfilePage');
		expect(page).toBeInTheDocument();
	});
	test('should be render ForbiddenPage page, require role is missing for user', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteAdmin(),
			initialState: {
				user: {authData: {id: '1'}, isInit: true},
			},
		});

		const page = await screen.findByTestId('ForbiddenPage');
		expect(page).toBeInTheDocument();
	});
	test('should be render AdminPage page, user has admin role', async () => {
		componentRender(<AppRouter/>, {
			route: getRouteAdmin(),
			initialState: {
				user: {authData: {id: '1', roles: [UserRoles.ADMIN], username: 'admin'}, isInit: true},
			},
		});

		const page = await screen.findByTestId('AdminPage');
		expect(page).toBeInTheDocument();
	});
});
