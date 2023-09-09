import { Characters } from "~pages/Characters";
import { Episodes } from "~pages/Episodes";
import { Home } from "~pages/Home";
import { NotFound } from "~pages/NotFound";

export const navigationRoutesConfig = [
    {
        path: "/",
        title: "Home",
        component: <Home />
    },
    {
        path: "/characters",
        title: "Characters",
        component: <Characters />
    },
    {
        path: "/episodes",
        title: "Episodes",
        component: <Episodes />
    },
    {
        path: "*",
        component: <NotFound />
    }
];

export const breakpoint = {
    tny: 320,
    xs: 480,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
    mega: 1920
};
