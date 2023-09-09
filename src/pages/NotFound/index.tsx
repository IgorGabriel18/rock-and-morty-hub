import { ContentSection } from "~components/ContentSection";

import * as S from "./styles";

export function NotFound() {
    return (
        <ContentSection isTopOfPage>
            <S.Title>OOPS! Page not found!</S.Title>
        </ContentSection>
    );
}
