import { navigationRoutesConfig } from "~utils/constants";

import * as S from "./styles";

export function HomeLinks() {
    const pathsWithTitle = navigationRoutesConfig.filter((path) => path.title);

    return (
        <S.HomeLinks>
            {pathsWithTitle.map(({ path, title }) => (
                <S.HomeLinksItem
                    key={path}
                    to={path}
                >
                    {title}
                </S.HomeLinksItem>
            ))}
        </S.HomeLinks>
    );
}
