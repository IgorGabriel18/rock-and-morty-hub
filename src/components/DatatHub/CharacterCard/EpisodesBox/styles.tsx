import styled, { css } from "styled-components";

export const EpisodesBox = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.md};
    `}
`;

export const EpisodesTitle = styled.h3`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.md};
    `}
`;

export const EpisodesList = styled.ul`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-direction: column;
        row-gap: ${theme.spacing.sm};
    `}
`;

export const EpisodesItem = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        padding: ${theme.spacing.xs} ${theme.spacing.sm};
        border-radius: ${theme.border.radius.secondary};
        background-color: ${theme.color.main};
        color: ${theme.color.secondary};
        font: ${theme.typography.sm};
    `}
`;
