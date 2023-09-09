import styled, { css } from "styled-components";

export const DatatHub = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-wrap: wrap;
        row-gap: ${theme.spacing.mega};
        justify-content: center;
    `}
`;

export const DatatHubLoader = styled.div`
    ${({ theme }) => css`
        width: 5rem;
        height: 5rem;
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.circle};
        border-bottom-color: transparent;
        animation: ${theme.animation.looping} ${theme.time.primary} linear infinite;
    `}
`;

export const DatatHubErrorMessage = styled.h2`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.mega};
        text-align: center;
    `}
`;

export const DatatHubTitleCount = styled.h2`
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
        grid-template: repeat(auto-fill, minmax(0, min-content)) / repeat(auto-fill, 14rem);
        gap: ${theme.spacing.xl} ${theme.spacing.md};
        justify-content: center;
    `}
`;

export const DatatHubPaginationControls = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: min-content / repeat(5, max-content);
        column-gap: ${theme.spacing.md};
        justify-content: center;
        align-items: center;

        .pagination__icon {
            color: ${theme.color.brand};
            font-size: ${theme.icon.secondary};
        }
    `}
`;

export const DatatHubPageStatus = styled.p`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.sm};
    `}
`;
