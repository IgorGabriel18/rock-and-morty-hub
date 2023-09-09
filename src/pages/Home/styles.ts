import styled, { css } from "styled-components";

export const HeroSection = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(3, min-content) / 100%;
        row-gap: ${theme.spacing.lg};
        justify-items: center;
    `}
`;

export const HeroSectionImage = styled.img`
    width: min(100%, 38rem);
    height: min-content;
`;

export const HeroSectionTextBox = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.xs};
    `}
`;

export const HeroSectionTitle = styled.h1`
    ${({ theme }) => css`
        color: ${theme.color.brand};
        font: ${theme.typography.xxl};
        text-align: center;
    `}
`;

export const HeroSectionText = styled.p`
    ${({ theme }) => css`
        color: ${theme.color.secondary};
        font: ${theme.typography.lg};
        text-align: center;
    `}
`;
