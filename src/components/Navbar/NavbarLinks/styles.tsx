import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface INavbarLinksProps {
    $isHighlight: boolean;
}

export const NavbarLinks = styled.nav`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: flex;
        flex-direction: column;
        gap: ${theme.spacing.md} ${theme.spacing.xl};

        @media screen and (min-width: ${theme.screen.breakpoint.xs}) {
            width: fit-content;
            flex-direction: row;
        }
    `}
`;

export const NavbarLinksButton = styled(Link)<INavbarLinksProps>`
    ${({ $isHighlight, theme }) => css`
        color: ${$isHighlight ? theme.color.brand : theme.color.secondary};
        font: ${theme.typography.lg};
        text-align: center;
    `}
`;
