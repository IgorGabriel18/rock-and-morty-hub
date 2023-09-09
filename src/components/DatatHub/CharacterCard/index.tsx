import { X } from "phosphor-react";

import { useVisibility } from "~hooks/useVisibility";
import { ICharacter } from "~types/characters";

import { EpisodesBox } from "./EpisodesBox";
import { InfoBox } from "./InfoBox";
import * as S from "./styles";
import { ToggleVisibilityButton } from "./ToggleVisibilityButton";

export function CharacterCard({ status, image, name, episode, location, species, gender, origin }: ICharacter) {
    const { visibility, handleClickToggleVisibility } = useVisibility();

    return (
        <S.CharacterCard>
            {!visibility ? (
                <>
                    <S.CharacterCardStatus $status={status.toLowerCase()}>{status}</S.CharacterCardStatus>
                    <S.CharacterCardFigureBox>
                        <S.CharacterCardImage
                            src={image}
                            alt={name}
                        />
                        <S.CharacterCardFigcaption>{name}</S.CharacterCardFigcaption>
                    </S.CharacterCardFigureBox>
                    <ToggleVisibilityButton toggleVisibility={handleClickToggleVisibility}>
                        view more
                    </ToggleVisibilityButton>
                </>
            ) : (
                <S.CharacterCardContent>
                    <ToggleVisibilityButton toggleVisibility={handleClickToggleVisibility}>
                        <X className="character-card__icon" />
                    </ToggleVisibilityButton>
                    <S.CharacterCardName>{name}</S.CharacterCardName>
                    <InfoBox
                        title="Location"
                        text={`${location.name} / ${location.dimension}`}
                    />
                    <InfoBox
                        title="Specie"
                        text={species}
                    />
                    <InfoBox
                        title="Gender"
                        text={gender}
                    />
                    <InfoBox
                        title="Origin"
                        text={`${origin.name} / ${origin.dimension}`}
                    />
                    <EpisodesBox list={episode} />
                </S.CharacterCardContent>
            )}
        </S.CharacterCard>
    );
}
