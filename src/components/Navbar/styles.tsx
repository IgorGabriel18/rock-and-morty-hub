import styled, { css } from "styled-components";

export const Navbar = styled.header`
    ${({ theme }) => css`
        width: min(100%, ${theme.screen.max_width});
        height: min-content;
        padding: ${theme.spacing.sm} ${theme.spacing.md};
        position: fixed;
        z-index: 10;
        display: flex;
        flex-wrap: wrap;
        row-gap: ${({ theme }) => theme.spacing.xl};
        justify-content: space-between;
        align-items: center;
        background-color: ${theme.color.main};
    `}
`;

export const NavbarLogo = styled.img`
    width: 10rem;
    height: min-content;
`;
