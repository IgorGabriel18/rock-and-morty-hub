import * as S from "./styles";

interface IStatusProps {
    loading: boolean;
    error: boolean;
}

export function Status({ loading, error }: IStatusProps) {
    return loading ? <S.StatusLoader /> : error ? <S.StatusErrorMessage>No data found!</S.StatusErrorMessage> : null;
}
