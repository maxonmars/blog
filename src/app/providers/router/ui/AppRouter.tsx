import {Suspense} from "react";
import {useRoutes} from "react-router-dom";
import {routes} from "shared/config/route/routeConfig";

export const AppRouter = () => {
    const appRoutes = useRoutes(routes);

    return (
        <Suspense fallback={<div>...Loading</div>}>
            {appRoutes}
        </Suspense>
    );
};