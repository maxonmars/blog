import {useSelector} from 'react-redux';
import type {UserRoles} from '@/entities/User';
import {selectUserAuthData, selectUserRoles} from '@/entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {ROUTE_PATH} from '@/app/providers/router/config/routeConfig';
import {useMemo} from 'react';

interface RequireAuthProps {
	children: JSX.Element;
	roles?: UserRoles[];
}

export const RequireAuth = ({children, roles}: RequireAuthProps) => {
	const userRoles = useSelector(selectUserRoles);
	const auth = useSelector(selectUserAuthData);
	const location = useLocation();

	const isAvailable = useMemo(() => {
		if (!roles) {
			return true;
		}

		if (!userRoles) {
			return false;
		}

		return roles.some(role => {
			return userRoles.includes(role);
		});
	}, [roles, userRoles]);

	// TODO: необходимо сделать переход на модалку авторизации
	if (!auth) {
		return <Navigate to={ROUTE_PATH.MAIN} state={{from: location}} replace />;
	}

	if (!isAvailable) {
		return <Navigate to={ROUTE_PATH.FORBIDDEN} state={{from: location}} replace/>;
	}

	return children;
};
