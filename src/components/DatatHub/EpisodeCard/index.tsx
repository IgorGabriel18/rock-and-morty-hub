import { IEpisode } from "~types/episodes";

import * as S from "./styles";

export function EpisodeCard({ episode, air_date, characters, name }: IEpisode) {
    return (
        <S.EpisodeCard>
            {episode}
            {air_date}
            {name}
        </S.EpisodeCard>
    );
}
