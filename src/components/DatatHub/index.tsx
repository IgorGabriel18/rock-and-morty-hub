import { CaretDoubleLeft, CaretDoubleRight, CaretLeft, CaretRight } from "phosphor-react";

import { IPageInfo, IChildren } from "~types/global-types";

import { PageButton } from "./PageButton";
import * as S from "./styles";

interface IDatatHubProps {
    loading: boolean;
    error: boolean;
    page: number;
    setPage: (value: number) => void;
}

export function DatatHub({
    loading,
    error,
    count,
    page,
    setPage,
    pages,
    prev,
    next,
    children
}: IDatatHubProps & IPageInfo & IChildren) {
    const disableFirst = page <= 1;
    const disableLast = page >= pages;
    const handleClickSetPage = (pageNumber: number) => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

        return setPage(pageNumber);
    };

    return (
        <S.DatatHub>
            {loading ? (
                <S.DatatHubLoader />
            ) : error ? (
                <S.DatatHubErrorMessage>No data found!</S.DatatHubErrorMessage>
            ) : (
                <>
                    <S.DatatHubTitleCount>{count}</S.DatatHubTitleCount>
                    <S.DatatHubList>{children}</S.DatatHubList>
                    <S.DatatHubPaginationControls>
                        <PageButton
                            disabled={disableFirst}
                            handlePage={() => handleClickSetPage(1)}
                        >
                            <CaretDoubleLeft className="pagination__icon" />
                        </PageButton>
                        <PageButton
                            disabled={disableFirst}
                            handlePage={() => handleClickSetPage(prev!)}
                        >
                            <CaretLeft className="pagination__icon" />
                        </PageButton>
                        <S.DatatHubPageStatus>
                            {page} / {pages}
                        </S.DatatHubPageStatus>
                        <PageButton
                            disabled={disableLast}
                            handlePage={() => handleClickSetPage(next!)}
                        >
                            <CaretRight className="pagination__icon" />
                        </PageButton>
                        <PageButton
                            disabled={disableLast}
                            handlePage={() => handleClickSetPage(pages)}
                        >
                            <CaretDoubleRight className="pagination__icon" />
                        </PageButton>
                    </S.DatatHubPaginationControls>
                </>
            )}
        </S.DatatHub>
    );
}
