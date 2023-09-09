import { GitBranch, GitMerge } from "phosphor-react";

import * as S from "./styles";

export function Footer() {
    return (
        <S.Footer>
            <S.FooterTitle>Developed by Igor</S.FooterTitle>
            <GitBranch className="footer__icon" />
            <S.FooterLink
                href="https://github.com/IgorGabriel18"
                target="_blank"
                rel="noreferrer"
            >
                GitHub
            </S.FooterLink>
            <GitMerge className="footer__icon" />
        </S.Footer>
    );
}
