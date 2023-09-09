import styled, { css } from "styled-components";

export const DatatHub = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        row-gap: ${theme.spacing.xl};
        justify-content: center;
    `}
`;

export const DatatHubCount = styled.h2`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: min-content / max-content 1fr;
        column-gap: ${theme.spacing.lg};
        align-items: center;
        color: ${theme.color.secondary};
        font: ${theme.typography.xl};

        &::after {
            content: "";
            width: 100%;
            height: ${theme.border.size.secondary};
            background-color: ${theme.color.brand};
        }
    `}
`;

export const DatatHubList = styled.ul`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(auto-fill, minmax(0, min-content)) / repeat(auto-fill, 12rem);
        gap: ${theme.spacing.xl} ${theme.spacing.md};
        justify-content: center;
    `}
`;
