import { useLocation } from "react-router-dom";

import { navigationRoutesConfig } from "~utils/constants";

import * as S from "./styles";

interface INavbarLinksProps {
    show: boolean;
    toggleVisibility: (() => void) | undefined;
}

export function NavbarLinks({ show, toggleVisibility }: INavbarLinksProps) {
    const { pathname } = useLocation();

    const pathsWithTitle = navigationRoutesConfig.filter((path) => path.title);

    return (
        show && (
            <S.NavbarLinks>
                {pathsWithTitle.map(({ path, title }) => (
                    <S.NavbarLinksButton
                        key={path}
                        to={path}
                        onClick={toggleVisibility}
                        $isHighlight={pathname === path}
                    >
                        {title}
                    </S.NavbarLinksButton>
                ))}
            </S.NavbarLinks>
        )
    );
}
