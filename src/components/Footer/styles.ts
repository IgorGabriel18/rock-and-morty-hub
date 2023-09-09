import styled, { css } from "styled-components";

export const Footer = styled.footer`
    ${({ theme }) => css`
        width: min(100%, ${theme.screen.max_width});
        height: min-content;
        padding: ${theme.spacing.mega} ${theme.spacing.md};
        position: relative;
        z-index: ${theme.screen.zIndex.primary};
        display: flex;
        flex-wrap: wrap;
        gap: ${theme.spacing.xl} ${theme.spacing.md};
        justify-content: center;
        align-items: center;

        .footer__icon {
            color: ${theme.color.brand};
            font-size: ${theme.icon.primary};
        }
    `}
`;

export const FooterTitle = styled.h5`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        color: ${theme.color.secondary};
        font: ${theme.typography.xl};
        text-align: center;
    `}
`;

export const FooterLink = styled.a`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.md};
    `}
`;
