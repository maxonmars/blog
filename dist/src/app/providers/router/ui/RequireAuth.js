import { jsx as _jsx } from "react/jsx-runtime";
import { useSelector } from 'react-redux';
import { selectUserAuthData } from 'entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTE_PATH } from 'app/providers/router/config/routeConfig';
export var RequireAuth = function (_a) {
    var children = _a.children;
    var auth = useSelector(selectUserAuthData);
    var location = useLocation();
    // TODO: необходимо сделать переход на модалку авторизации
    if (!auth) {
        return _jsx(Navigate, { to: ROUTE_PATH.MAIN, state: { from: location }, replace: true });
    }
    return children;
};
//# sourceMappingURL=RequireAuth.js.map