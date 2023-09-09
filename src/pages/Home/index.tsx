import heroImage from "~assets/images/hero.png";
import { ContentSection } from "~components/ContentSection";

import { HomeLinks } from "./HomeLinks";
import * as S from "./styles";

export function Home() {
    return (
        <ContentSection isTopOfPage>
            <S.HeroSection>
                <S.HeroSectionImage
                    src={heroImage}
                    alt="Hero"
                />
                <S.HeroSectionTextBox>
                    <S.HeroSectionTitle>Rick and Morty Hub</S.HeroSectionTitle>
                    <S.HeroSectionText>What would you like to see?</S.HeroSectionText>
                </S.HeroSectionTextBox>
                <HomeLinks />
            </S.HeroSection>
        </ContentSection>
    );
}
