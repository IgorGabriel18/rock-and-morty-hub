import { IEpisode } from "~types/episodes";

import * as S from "./styles";

export function EpisodeCard({ episode, air_date, name }: IEpisode) {
    return (
        <S.EpisodeCard>
            <S.EpisodeCardTitle>{episode}</S.EpisodeCardTitle>
            <S.EpisodeCardText>{name}</S.EpisodeCardText>
            <S.EpisodeCardText>{air_date}</S.EpisodeCardText>
        </S.EpisodeCard>
    );
}
