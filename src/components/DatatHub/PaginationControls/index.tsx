import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "phosphor-react";
import { useContext } from "react";

import { ScreenContext } from "~contexts/ScreenContext";
import { IPageInfo } from "~types/global-types";

import { PageButton } from "../PageButton";
import * as S from "./styles";

interface IPaginationControlsProps {
    page: number;
    setPage: (value: number) => void;
}

export function PaginationControls({ page, setPage, next, pages, prev }: IPaginationControlsProps & IPageInfo) {
    const { handleClickScrollToTop } = useContext(ScreenContext);

    const disableFirst = page <= 1;
    const disableLast = page >= pages;
    const handleClickSetPage = (pageNumber: number) => {
        handleClickScrollToTop();
        setPage(pageNumber);
    };

    return (
        <S.PaginationControls>
            <PageButton
                disabled={disableFirst}
                handlePage={() => handleClickSetPage(1)}
            >
                <CaretDoubleLeft className="pagination-controls__icon" />
            </PageButton>
            <PageButton
                disabled={disableFirst}
                handlePage={() => handleClickSetPage(prev!)}
            >
                <CaretLeft className="pagination-controls__icon" />
            </PageButton>
            <S.ResultHubPageStatus>
                {page} / {pages}
            </S.ResultHubPageStatus>
            <PageButton
                disabled={disableLast}
                handlePage={() => handleClickSetPage(next!)}
            >
                <CaretRight className="pagination-controls__icon" />
            </PageButton>
            <PageButton
                disabled={disableLast}
                handlePage={() => handleClickSetPage(pages)}
            >
                <CaretDoubleRight className="pagination-controls__icon" />
            </PageButton>
        </S.PaginationControls>
    );
}
