import styled, { css } from "styled-components";

export const ToggleVisibilityButton = styled.button`
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
