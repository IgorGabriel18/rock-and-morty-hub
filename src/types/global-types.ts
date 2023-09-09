import { ReactNode } from "react";

import { theme } from "~styles/theme";

import { ICharacter } from "./characters";
import { IEpisode } from "./episodes";

export type ThemeType = typeof theme;

export interface IChildren {
    children: ReactNode;
}

export interface IPageInfo {
    count: number;
    pages: number;
    prev: number | null;
    next: number | null;
}

export interface IApiResponse {
    episodes?: {
        info: IPageInfo;
        results: IEpisode[];
    };
    characters?: {
        info: IPageInfo;
        results: ICharacter[];
    };
}
