import { IChildren } from "~types/global-types";

import * as S from "./styles";

interface IContentSectionProps {
    isTopOfPage?: boolean;
}

export function ContentSection({ isTopOfPage, children }: IChildren & IContentSectionProps) {
    return <S.ContentSection $isTopOfPage={isTopOfPage}>{children}</S.ContentSection>;
}
