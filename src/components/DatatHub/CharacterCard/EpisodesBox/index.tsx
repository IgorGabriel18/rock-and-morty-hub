import { IEpisode } from "~types/episodes";

import * as S from "./styles";

interface IEpisodesBoxProps {
    list: IEpisode[];
}

export function EpisodesBox({ list }: IEpisodesBoxProps) {
    return (
        <S.EpisodesBox>
            <S.EpisodesTitle>Episodes</S.EpisodesTitle>
            <S.EpisodesList>
                {list.map(({ id, name }) => (
                    <S.EpisodesItem key={id}>{name}</S.EpisodesItem>
                ))}
            </S.EpisodesList>
        </S.EpisodesBox>
    );
}
