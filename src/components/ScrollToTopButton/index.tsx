import { ArrowUp } from "phosphor-react";

import * as S from "./styles";

interface IScrollToTopButtonProps {
    visibility: boolean;
    scrollToTop: () => void;
}

export function ScrollToTopButton({ visibility, scrollToTop }: IScrollToTopButtonProps) {
    return (
        visibility && (
            <S.ScrollToTopButton
                type="button"
                onClick={scrollToTop}
            >
                <ArrowUp className="scroll-to-top-button__icon" />
            </S.ScrollToTopButton>
        )
    );
}
