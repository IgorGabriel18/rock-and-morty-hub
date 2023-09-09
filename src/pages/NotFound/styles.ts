import styled, { css } from "styled-components";

export const Title = styled.h1`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.mega};
        text-align: center;
    `}
`;
