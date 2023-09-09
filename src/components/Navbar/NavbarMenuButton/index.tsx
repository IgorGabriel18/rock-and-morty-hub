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
            <S.NavbarMenuButton
                type="button"
                onClick={toggleVisibility}
            >
                {!visibility ? (
                    <List className="navbar-menu-button__icon" />
                ) : (
                    <X className="navbar-menu-button__icon" />
                )}
            </S.NavbarMenuButton>
        )
    );
}
