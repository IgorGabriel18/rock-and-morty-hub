import styled, { css } from "styled-components";

export const EpisodeCard = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: 7rem;
        padding: ${theme.spacing.sm};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
        display: grid;
        grid: repeat(3, min-content) / 100%;
        row-gap: ${theme.spacing.sm};
        align-content: space-between;
        background-color: ${theme.color.primary};
    `}
`;

export const EpisodeCardTitle = styled.h4`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.md};
        text-align: center;
    `}
`;

export const EpisodeCardText = styled.p`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.sm};
        text-align: center;
    `}
`;
