import styled, { css } from "styled-components";

interface IContainerProps {
    $isTopOfPage?: boolean;
}

export const ContentSection = styled.section<IContainerProps>`
    ${({ $isTopOfPage, theme }) => css`
        width: min(100%, ${theme.screen.max_width});
        height: min-content;
        padding: ${`${$isTopOfPage ? theme.spacing.ultra : theme.spacing.mega} ${theme.spacing.md}`};
    `}
`;
