import styled, { css } from "styled-components";

interface ITextProps {
    $isStatus?: string;
}

export const CharacterCard = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: auto;
        padding: ${theme.spacing.sm};
        border-radius: ${theme.border.radius.primary};
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.sm};
        background-color: ${theme.color.primary};
    `}
`;

export const CharacterCardHeading = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid: min-content / repeat(2, max-content);
    justify-content: space-between;
`;

export const CharacterCardText = styled.p<ITextProps>`
    ${({ $isStatus, theme }) => css`
        color: ${$isStatus === "alive"
            ? theme.color.variants.alive
            : $isStatus === "dead"
            ? theme.color.variants.dead
            : $isStatus === "unknown"
            ? theme.color.variants.unknown
            : theme.color.secondary};
        font: ${theme.typography.sm};
        text-align: justify;
        text-transform: capitalize;
    `}
`;

export const CharacterCardFigure = styled.figure`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.md};
    `}
`;

export const CharacterCardImage = styled.img`
    ${({ theme }) => css`
        width: 100%;
        height: 8rem;
        border-radius: ${theme.border.radius.secondary};
    `}
`;

export const CharacterCardFigcaption = styled.figcaption`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.md};
        text-align: center;
    `}
`;
