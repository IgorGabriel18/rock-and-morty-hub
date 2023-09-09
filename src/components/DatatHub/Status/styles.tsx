import styled, { css } from "styled-components";

export const StatusLoader = styled.div`
    ${({ theme }) => css`
        width: 5rem;
        height: 5rem;
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.circle};
        border-bottom-color: transparent;
        animation: ${theme.animation.looping} ${theme.time.primary} linear infinite;
    `}
`;

export const StatusErrorMessage = styled.h1`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.mega};
        text-align: center;
    `}
`;
