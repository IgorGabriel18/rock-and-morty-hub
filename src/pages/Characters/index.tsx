import { ContentSection } from "~components/ContentSection";
import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Characters() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "characters" });

    return (
        <ContentSection isTopOfPage>
            <h1>Characters</h1>
        </ContentSection>
    );
}
