import styled, { css } from "styled-components";

export const Footer = styled.footer`
    ${({ theme }) => css`
        width: min(100%, ${theme.screen.max_width});
        height: min-content;
        padding: ${theme.spacing.mega} ${theme.spacing.md};
        display: grid;
        grid: repeat(2, min-content) / repeat(3, max-content);
        gap: ${theme.spacing.sm} ${theme.spacing.xs};
        grid-template-areas:
            "title title title"
            "icon1 link icon2";
        justify-content: center;
        justify-items: center;
        align-items: center;

        .footer__icon {
            color: ${theme.color.brand};
            font-size: ${theme.icon.primary};
        }

        &:nth-child(2) {
            grid-area: icon1;
        }

        &:nth-child(4) {
            grid-area: icon2;
        }
    `}
`;

export const FooterTitle = styled.h5`
    ${({ theme }) => css`
        grid-area: title;
        color: ${theme.color.secondary};
        font: ${theme.typography.xl};
    `}
`;

export const FooterLink = styled.a`
    ${({ theme }) => css`
        grid-area: link;
        color: ${theme.color.brand};
        font: ${theme.typography.md};
    `}
`;
