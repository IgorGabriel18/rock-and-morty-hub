import { keyframes } from "styled-components";

export const theme = {
    color: {
        brand: "#62a4ab",
        main: "#111111",
        primary: "#2f2f2f",
        secondary: "#f6f6f6",
        variants: {
            glass: "rgba(0, 0, 0, 0.75)",
            alive: "#29f213",
            dead: "#0e0f0e",
            unknown: "#8019b7"
        }
    },
    screen: {
        max_width: "80rem",
        breakpoint: {
            tny: "20rem",
            xs: "30rem",
            sm: "36rem",
            md: "48rem",
            lg: "62rem",
            xl: "75rem",
            xxl: "90rem",
            mega: "120rem"
        },
        zIndex: {
            primary: 10,
            secondary: 20,
            tertiary: 30,
            quaternary: 400
        }
    },
    spacing: {
        xs: "0.25rem",
        sm: "0.5rem",
        md: "1rem",
        lg: "1.5rem",
        xl: "2rem",
        xxl: "3rem",
        mega: "4rem",
        super: "6rem",
        ultra: "8rem"
    },
    typography: {
        sm: "normal 500 0.875rem / normal 'Montserrat', 'sans-serif'",
        md: "normal 400 1rem / normal 'Montserrat', 'sans-serif'",
        lg: "normal 500 1.25rem / normal 'Montserrat', 'sans-serif'",
        xl: "normal 500 1.5rem / normal 'Montserrat', 'sans-serif'",
        xxl: "normal 700 1.875rem / normal 'Montserrat', 'sans-serif'",
        mega: "normal 700 2.25rem / normal 'Montserrat', 'sans-serif'"
    },
    border: {
        size: {
            primary: "0.30rem",
            secondary: "0.125rem",
            tertiary: "0.5rem"
        },
        radius: {
            primary: "1rem",
            secondary: "0.5rem",
            circle: "100%"
        }
    },
    icon: {
        primary: "3rem",
        secondary: "1.75rem",
        tertiary: "1.25rem"
    },
    time: {
        primary: "1s",
        secondary: "0.5s"
    },
    animation: {
        looping: keyframes`
            from {
                transform: rotate(0deg);
            }
            to {
                transform: rotate(360deg);
            }
        `
    }
};
