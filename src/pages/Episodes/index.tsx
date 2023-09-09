import { ContentSection } from "~components/ContentSection";
import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Episodes() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "episodes" });

    return (
        <>
            <ContentSection isTopOfPage>
                <h1>Episodes</h1>
            </ContentSection>
        </>
    );
}
