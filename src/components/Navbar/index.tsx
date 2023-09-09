import logoImage from "~assets/images/logo.png";
import { useVisibility } from "~hooks/useVisibility";

import { NavbarLinks } from "./NavbarLinks";
import { NavbarMenuButton } from "./NavbarMenuButton";
import * as S from "./styles";

interface INavbarProps {
    showButton: boolean;
    showLinks: boolean;
}

export function Navbar({ showButton, showLinks }: INavbarProps) {
    const { visibility, handleClickToggleVisibility } = useVisibility();

    return (
        <S.Navbar>
            <S.NavbarLogo
                src={logoImage}
                alt="Logo"
            />
            <NavbarMenuButton
                show={showButton}
                visibility={visibility}
                toggleVisibility={handleClickToggleVisibility}
            />
            <NavbarLinks
                show={showLinks || visibility}
                toggleVisibility={handleClickToggleVisibility}
            />
        </S.Navbar>
    );
}
