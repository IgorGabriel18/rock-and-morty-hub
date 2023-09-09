import { IChildren } from "~types/global-types";

import * as S from "./styles";

interface IPageButtonProps {
    disabled: boolean;
    handlePage: () => void;
}

export function PageButton({ disabled, handlePage, children }: IPageButtonProps & IChildren) {
    return (
        <S.PageButton
            type="button"
            disabled={disabled}
            onClick={handlePage}
        >
            {children}
        </S.PageButton>
    );
}
