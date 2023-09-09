import * as S from "./styles";

interface IInfoBoxProps {
    title: string;
    text: string;
}

export function InfoBox({ title, text }: IInfoBoxProps) {
    return (
        <S.InfoBox>
            <S.InfoBoxTitle>{title}</S.InfoBoxTitle>
            <S.InfoBoxText>{text}</S.InfoBoxText>
        </S.InfoBox>
    );
}
