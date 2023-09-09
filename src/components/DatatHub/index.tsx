import { IChildren, IPageInfo } from "~types/global-types";

import { PaginationControls } from "./PaginationControls";
import { Status } from "./Status";
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
    children,
    page,
    setPage,
    next,
    pages,
    prev
}: IDatatHubProps & IPageInfo & IChildren) {
    return (
        <S.DatatHub>
            {loading || error ? (
                <Status {...{ loading, error }} />
            ) : (
                <>
                    <S.DatatHubCount>{count}</S.DatatHubCount>
                    <S.DatatHubList>{children}</S.DatatHubList>
                    <PaginationControls
                        setPage={setPage}
                        {...{ count, page, next, pages, prev }}
                    />
                </>
            )}
        </S.DatatHub>
    );
}
