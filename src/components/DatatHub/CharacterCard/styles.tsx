import styled, { css } from "styled-components";

interface IStatus {
    $status: string;
}

export const CharacterCard = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: 18rem;
        padding: ${theme.spacing.sm};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
        display: flex;
        flex-wrap: wrap;
        row-gap: ${theme.spacing.sm};
        justify-content: center;
        background-color: ${theme.color.primary};

        .character-card__icon {
            color: ${theme.color.primary};
            font-size: ${theme.icon.tertiary};
        }
    `}
`;

export const CharacterCardStatus = styled.p<IStatus>`
    ${({ $status, theme }) => css`
        width: 100%;
        height: min-content;
        color: ${$status === "alive"
            ? theme.color.variants.alive
            : $status === "dead"
            ? theme.color.variants.dead
            : $status === "unknown" && theme.color.variants.unknown};
        font: ${theme.typography.sm};
        text-align: left;
        text-transform: capitalize;
    `}
`;

export const CharacterCardFigureBox = styled.figure`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.xs};
    `}
`;

export const CharacterCardImage = styled.img`
    ${({ theme }) => css`
        width: 100%;
        height: 10rem;
        border-radius: ${theme.border.radius.secondary};
    `}
`;

export const CharacterCardFigcaption = styled.figcaption`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.md};
        text-align: center;
    `}
`;

export const CharacterCardButton = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.xs} ${theme.spacing.md};
        border: none;
        border-radius: ${theme.border.radius.primary};
        display: grid;
        grid: min-content / max-content;
        background-color: ${theme.color.brand};
        color: ${theme.color.primary};
        font: ${theme.typography.sm};
        cursor: pointer;
    `}
`;

export const CharacterCardContent = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: 100%;
        padding-inline: ${theme.spacing.xs};
        overflow-y: scroll;
        display: grid;
        grid: repeat(7, min-content) / 100%;
        justify-items: end;
        row-gap: ${theme.spacing.md};

        &::-webkit-scrollbar {
            width: ${({ theme }) => theme.border.size.primary};
            background-color: ${({ theme }) => theme.color.main};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${({ theme }) => theme.color.brand};
            border-radius: ${({ theme }) => theme.border.radius.secondary};
        }
    `}
`;

export const CharacterCardName = styled.h2`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color.secondary};
        font: ${theme.typography.lg};
        text-align: center;
    `}
`;
