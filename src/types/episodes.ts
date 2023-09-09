import { ICharacter } from "./characters";

export interface IEpisode {
    id: string;
    name: string;
    air_date: string;
    episode: string;
    characters: ICharacter[];
}
