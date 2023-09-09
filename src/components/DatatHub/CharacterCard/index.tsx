import { ICharacter } from "~types/characters";

import * as S from "./styles";

export function CharacterCard({ name, status, species, image }: ICharacter) {
    return (
        <S.CharacterCard>
            <S.CharacterCardHeading>
                <S.CharacterCardText $isStatus={status.toLowerCase()}>{status}</S.CharacterCardText>
                <S.CharacterCardText>{species}</S.CharacterCardText>
            </S.CharacterCardHeading>
            <S.CharacterCardFigure>
                <S.CharacterCardImage
                    src={image}
                    alt={name}
                />
                <S.CharacterCardFigcaption>{name}</S.CharacterCardFigcaption>
            </S.CharacterCardFigure>
        </S.CharacterCard>
    );
}
