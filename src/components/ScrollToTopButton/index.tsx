import { ArrowUp } from "phosphor-react";
import { useContext } from "react";

import { ScreenContext } from "~contexts/ScreenContext";

import * as S from "./styles";

export function ScrollToTopButton() {
    const { scrollButtonIsVisible, handleClickScrollToTop } = useContext(ScreenContext);

    return (
        scrollButtonIsVisible && (
            <S.ScrollToTopButton
                type="button"
                onClick={handleClickScrollToTop}
            >
                <ArrowUp className="scroll-to-top-button__icon" />
            </S.ScrollToTopButton>
        )
    );
}
