import styled, { css } from "styled-components";

export const NavbarMenuButton = styled.button`
    ${({ theme }) => css`
        all: unset;
        width: max-content;
        height: min-content;
        border: none;
        background-color: transparent;
        cursor: pointer;

        .navbar-menu-button__icon {
            color: ${theme.color.secondary};
            font-size: ${theme.icon.primary};
        }
    `}
`;
