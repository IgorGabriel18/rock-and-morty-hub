import { useQuery } from "@apollo/client";
import { useCallback, useState } from "react";

import { EPISODES_QUERY, CHARACTERS_QUERY } from "~graphql/typeDefs";
import { IApiResponse } from "~types/global-types";

interface IUseApiProps {
    queryType: "episodes" | "characters";
}

export const useRickAndMorty = ({ queryType }: IUseApiProps) => {
    const [page, setPage] = useState(1);
    const QUERY = queryType === "episodes" ? EPISODES_QUERY : CHARACTERS_QUERY;
    const { loading, error, data } = useQuery<IApiResponse>(QUERY, {
        variables: { page: page }
    });

    const handleSetPage = useCallback((pageNumber: number) => {
        setPage(pageNumber);
    }, []);

    return { page, handleSetPage, loading, error, data };
};
