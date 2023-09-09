import styled, { css } from "styled-components";

export const PageButton = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        border: ${theme.border.size.secondary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
        display: grid;
        grid: min-content / max-content;
        cursor: pointer;

        &:disabled {
            padding: ${theme.spacing.xs} ${theme.spacing.sm};
            opacity: 0.25;
        }
    `}
`;
