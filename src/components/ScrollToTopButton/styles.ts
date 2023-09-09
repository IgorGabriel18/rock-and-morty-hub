import styled, { css } from "styled-components";

export const ScrollToTopButton = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: 3rem;
        height: 3rem;
        border: none;
        border-radius: ${({ theme }) => theme.border.radius.circle};
        position: fixed;
        inset: auto ${theme.spacing.lg} ${theme.spacing.lg} auto;
        z-index: 5;
        display: grid;
        grid: min-content / max-content;
        place-content: center;
        background-color: ${theme.color.primary};
        cursor: pointer;

        .scroll-to-top-button__icon {
            color: ${theme.color.brand};
            font-size: ${theme.icon.secondary};
        }
    `}
`;
