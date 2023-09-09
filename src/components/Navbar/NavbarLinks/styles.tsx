import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface IContainerLinkProps {
    $isHighlight: boolean;
}

export const Container = styled.nav`
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

export const ContainerLink = styled(Link)<IContainerLinkProps>`
    ${({ $isHighlight, theme }) => css`
        color: ${$isHighlight ? theme.color.brand : theme.color.secondary};
        font: ${theme.typography.lg};
    `}
`;
