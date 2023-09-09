import { IEpisode } from "./episodes";

export interface ICharacter {
    id: "string";
    name: "string";
    status: "string";
    species: "string";
    gender: "string";
    origin: {
        id: "string";
        name: "string";
        dimension: "string";
    };
    location: {
        id: "string";
        name: "string";
        dimension: "string";
    };
    image: "string";
    episode: IEpisode[];
}
