import {useSelector} from 'react-redux';
import {selectUserAuthData} from 'entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {ROUTE_PATH} from 'app/providers/router/config/routeConfig';

export const RequireAuth = ({children}: {children: JSX.Element}) => {
	const auth = useSelector(selectUserAuthData);
	const location = useLocation();

	// TODO: необходимо сделать переход на модалку авторизации
	if (!auth) {
		return <Navigate to={ROUTE_PATH.MAIN} state={{from: location}} replace />;
	}

	return children;
};
