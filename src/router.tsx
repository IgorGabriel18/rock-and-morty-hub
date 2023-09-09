import { Routes, Route } from "react-router-dom";

import { navigationRoutesConfig } from "~utils/constants";

export function Router() {
    return (
        <Routes>
            {navigationRoutesConfig.map(({ path, component }) => (
                <Route
                    key={path}
                    path={path}
                    element={component}
                />
            ))}
        </Routes>
    );
}
