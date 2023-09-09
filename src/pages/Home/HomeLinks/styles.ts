import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HomeLinks = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(3, min-content) / 100%;
        gap: ${theme.spacing.md} ${theme.spacing.lg};
        justify-items: center;

        @media screen and (min-width: ${theme.screen.breakpoint.md}) {
            grid: min-content / repeat(3, 1fr);
        }
    `}
`;

export const HomeLinksItem = styled(Link)`
    ${({ theme }) => css`
        width: min(100%, 18rem);
        height: min-content;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        border-radius: ${theme.border.radius.primary};
        background-color: ${theme.color.brand};
        color: ${theme.color.secondary};
        font: ${theme.typography.md};
        text-align: center;
    `}
`;
