import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Episodes() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "episodes" });

    return <h1>Episodes</h1>;
}
