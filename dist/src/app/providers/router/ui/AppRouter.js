var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import { routes } from 'app/providers/router/config/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
export var AppRouter = function () {
    var withRequireAuthRoutes = routes.map(function (route) {
        return __assign(__assign({}, route), { element: route.authOnly
                ? _jsx(RequireAuth, { children: route.element }, route.path)
                : route.element });
    });
    var appRoutes = useRoutes(withRequireAuthRoutes);
    return (_jsx(Suspense, __assign({ fallback: _jsx(PageLoader, {}) }, { children: appRoutes })));
};
//# sourceMappingURL=AppRouter.js.map