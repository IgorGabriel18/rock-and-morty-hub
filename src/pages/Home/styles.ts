import styled, { css } from "styled-components";

export const HeroSection = styled.section`
    ${({ theme }) => css`
        width: 100%;
        height: auto;
        min-height: 100vh;
        display: grid;
        grid: repeat(3, min-content) / 100%;
        row-gap: ${theme.spacing.xl};
        justify-items: center;
    `}
`;

export const HeroSectionImageBg = styled.img`
    width: min(100%, 40rem);
    height: min-content;
`;

export const HeroSectionBox = styled.div`
    ${({ theme }) => css`
        width: 100%;
        height: min-content;
        display: grid;
        grid: repeat(2, min-content) / 100%;
        row-gap: ${theme.spacing.sm};
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
