import { ContentSection } from "~components/ContentSection";
import { DatatHub } from "~components/DatatHub";
import { CharacterCard } from "~components/DatatHub/CharacterCard";
import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Characters() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "characters" });

    return (
        <ContentSection isTopOfPage>
            <DatatHub
                loading={loading}
                error={error ? true : false}
                page={page}
                setPage={handleSetPage}
                {...data?.characters?.info!}
            >
                {data?.characters?.results.map((item) => (
                    <CharacterCard
                        key={item.id}
                        {...item}
                    />
                ))}
            </DatatHub>
        </ContentSection>
    );
}
