import { IChildren } from "~types/global-types";

import * as S from "./styles";

interface IToggleVisibilityButtonProps {
    toggleVisibility: () => void;
}

export function ToggleVisibilityButton({ toggleVisibility, children }: IToggleVisibilityButtonProps & IChildren) {
    return (
        <S.ToggleVisibilityButton
            type="button"
            onClick={toggleVisibility}
        >
            {children}
        </S.ToggleVisibilityButton>
    );
}
