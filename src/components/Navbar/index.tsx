import { useContext } from "react";

import logoImage from "~assets/images/logo.png";
import { ScreenContext } from "~contexts/ScreenContext";
import { useVisibility } from "~hooks/useVisibility";

import { NavbarLinks } from "./NavbarLinks";
import { NavbarMenuButton } from "./NavbarMenuButton";
import * as S from "./styles";

export function Navbar() {
    const { screenWidth, breakpoint } = useContext(ScreenContext);
    const { visibility, handleClickToggleVisibility } = useVisibility();

    return (
        <S.Container>
            <S.ContainerLogo
                src={logoImage}
                alt="Logo"
            />
            <NavbarMenuButton
                show={screenWidth < breakpoint.xs}
                visibility={visibility}
                toggleVisibility={handleClickToggleVisibility}
            />
            <NavbarLinks
                show={screenWidth >= breakpoint.xs || visibility}
                toggleVisibility={screenWidth >= breakpoint.xs || visibility ? handleClickToggleVisibility : undefined}
            />
        </S.Container>
    );
}
