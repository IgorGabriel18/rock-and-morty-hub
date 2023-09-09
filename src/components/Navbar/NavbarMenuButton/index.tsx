import { List, X } from "phosphor-react";

import * as S from "./styles";

interface INavbarMenuButtonProps {
    show: boolean;
    visibility: boolean;
    toggleVisibility: () => void;
}

export function NavbarMenuButton({ show, visibility, toggleVisibility }: INavbarMenuButtonProps) {
    return (
        show && (
            <S.Container
                type="button"
                onClick={toggleVisibility}
            >
                {!visibility ? <List className="container__icon" /> : <X className="container__icon" />}
            </S.Container>
        )
    );
}
