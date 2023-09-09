import { gql } from "@apollo/client";

export const EPISODES_QUERY = gql`
    query getAllEpisodes($page: Int) {
        episodes(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                air_date
                episode
                characters {
                    id
                    name
                    image
                }
            }
        }
    }
`;

export const CHARACTERS_QUERY = gql`
    query getAllCharacters($page: Int) {
        characters(page: $page) {
            info {
                count
                pages
                next
                prev
            }
            results {
                id
                name
                status
                species
                gender
                origin {
                    id
                    name
                    dimension
                }
                location {
                    id
                    name
                    dimension
                }
                image
                episode {
                    id
                    name
                    episode
                }
            }
        }
    }
`;
