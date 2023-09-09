import { Footer } from "~components/Footer";
import { Navbar } from "~components/Navbar";
import { ScrollToTopButton } from "~components/ScrollToTopButton";
import { GlobalStyles } from "~styles/global-styles";

import { Router } from "./router";

export function App() {
    return (
        <>
            <GlobalStyles />
            <Navbar />
            <Router />
            <ScrollToTopButton />
            <Footer />
        </>
    );
}
