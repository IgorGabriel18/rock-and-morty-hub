import styled, { css } from "styled-components";

export const PageButton = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: max-content;
        height: min-content;
        padding: ${theme.spacing.xs};
        border: ${theme.border.size.secondary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
        display: grid;
        grid: min-content / max-content;
        cursor: pointer;

        &:disabled {
            padding: ${theme.spacing.xs};
            opacity: 0.25;
        }

        @media screen and (min-width: ${theme.screen.breakpoint.xs}) {
            padding-inline: ${theme.spacing.md};

            &:disabled {
                padding-inline: ${theme.spacing.sm};
            }
        }
    `}
`;
