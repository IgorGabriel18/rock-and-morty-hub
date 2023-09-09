import { createContext, useState, useEffect, useCallback } from "react";

import { IChildren } from "~types/global-types";
import { breakpoint } from "~utils/constants";

interface IScreenContext {
    screenWidth: number;
    breakpoint: typeof breakpoint;
    scrollButtonIsVisible: boolean;
    handleClickScrollToTop: () => void;
}

export const ScreenContext = createContext({} as IScreenContext);

export function ScreenContextProvider({ children }: IChildren) {
    const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
    const [scrollButtonIsVisible, setScrollButtonIsVisible] = useState<boolean>(false);

    const handleScreenWidth = () => setScreenWidth(window.innerWidth);
    const handleScrollButtonVisibility = () => setScrollButtonIsVisible(window.scrollY >= 200);
    const handleClickScrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: "smooth" }), []);

    useEffect(() => {
        window.addEventListener("resize", handleScreenWidth);

        return () => window.removeEventListener("resize", handleScreenWidth);
    }, [screenWidth]);
    useEffect(() => {
        window.addEventListener("scroll", handleScrollButtonVisibility);

        return () => window.removeEventListener("scroll", handleScrollButtonVisibility);
    }, [scrollButtonIsVisible]);

    return (
        <ScreenContext.Provider value={{ screenWidth, breakpoint, scrollButtonIsVisible, handleClickScrollToTop }}>
            {children}
        </ScreenContext.Provider>
    );
}
