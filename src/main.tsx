import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ScreenContextProvider } from "~contexts/ScreenContext.tsx";
import { client } from "~graphql/client.tsx";
import { theme } from "~styles/theme.ts";

import { App } from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <ApolloProvider client={client}>
                <ScreenContextProvider>
                    <App />
                </ScreenContextProvider>
            </ApolloProvider>
        </ThemeProvider>
    </BrowserRouter>
);
