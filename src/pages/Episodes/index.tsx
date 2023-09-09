import { ContentSection } from "~components/ContentSection";
import { DatatHub } from "~components/DatatHub";
import { EpisodeCard } from "~components/DatatHub/EpisodeCard";
import { useRickAndMorty } from "~hooks/useRickAndMorty";

export function Episodes() {
    const { loading, error, data, page, handleSetPage } = useRickAndMorty({ queryType: "episodes" });

    return (
        <>
            <ContentSection isTopOfPage>
                <DatatHub
                    loading={loading}
                    error={error ? true : false}
                    page={page}
                    setPage={handleSetPage}
                    {...data?.episodes?.info!}
                >
                    {data?.episodes?.results.map((item) => (
                        <EpisodeCard
                            key={item.id}
                            {...item}
                        />
                    ))}
                </DatatHub>
            </ContentSection>
        </>
    );
}
