import { useContext } from "react";

import { Footer } from "~components/Footer";
import { Navbar } from "~components/Navbar";
import { ScrollToTopButton } from "~components/ScrollToTopButton";
import { ScreenContext } from "~contexts/ScreenContext";
import { GlobalStyles } from "~styles/global-styles";

import { Router } from "./router";

export function App() {
    const { screenWidth, breakpoint, scrollButtonIsVisible, handleClickScrollToTop } = useContext(ScreenContext);

    return (
        <>
            <GlobalStyles />
            <Navbar
                showButton={screenWidth < breakpoint.xs}
                showLinks={screenWidth >= breakpoint.xs}
            />
            <Router />
            <ScrollToTopButton
                visibility={scrollButtonIsVisible}
                scrollToTop={handleClickScrollToTop}
            />
            <Footer />
        </>
    );
}
