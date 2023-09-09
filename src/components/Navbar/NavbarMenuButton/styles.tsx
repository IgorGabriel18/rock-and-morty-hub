import styled, { css } from "styled-components";

export const Container = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: max-content;
        height: min-content;
        border: none;
        background-color: transparent;
        cursor: pointer;

        .container__icon {
            color: ${theme.color.secondary};
            font-size: ${theme.icon.primary};
        }
    `}
`;
