import styled, { css } from "styled-components";

export const PaginationControls = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: min-content / repeat(5, max-content);
        column-gap: ${theme.spacing.md};
        justify-content: center;
        align-items: center;

        .pagination-controls__icon {
            color: ${theme.color.brand};
            font-size: ${theme.icon.secondary};
        }
    `}
`;

export const ResultHubPageStatus = styled.p`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.sm};
    `}
`;
