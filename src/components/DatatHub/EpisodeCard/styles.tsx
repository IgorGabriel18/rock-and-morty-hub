import styled, { css } from "styled-components";

export const EpisodeCard = styled.li`
    ${({ theme }) => css`
        width: 100%;
        height: 6rem;
        padding: ${theme.spacing.sm};
        border: ${theme.border.size.primary} solid ${theme.color.brand};
        border-radius: ${theme.border.radius.secondary};
        background-color: ${theme.color.primary};
    `}
`;
