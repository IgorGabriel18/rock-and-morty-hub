import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Characters() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "characters" });

    return <h1>Characters</h1>;
}
