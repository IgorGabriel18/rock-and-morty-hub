import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    ${({ theme }) => css`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            #root {
                width: 100%;
                height: min-content;
                min-height: 100vh;
                display: flex;
                flex-direction: column;
                align-items: center;
                background-color: ${theme.color.main};

                a {
                    text-decoration: none;
                }

                ul {
                    list-style: none;
                }
            }

            &::-webkit-scrollbar {
                width: ${({ theme }) => theme.border.size.tertiary};
                background-color: ${({ theme }) => theme.color.main};
            }

            &::-webkit-scrollbar-thumb {
                background-color: ${({ theme }) => theme.color.brand};
                border-radius: ${({ theme }) => theme.border.radius.secondary};
            }
        }
    `}
`;
