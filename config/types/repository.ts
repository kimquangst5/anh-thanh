import { ESort } from "../types";

export type TSelectFields = string | Record<string, 1 | 0>;

export type TPopulateChild = Array<{
    path: string;
    select?: TSelectFields;
    populate?: TPopulateChild;
}>;

export type TPopulateOptions = Array<{
    path: string;
    select?: TSelectFields;
    populate?: TPopulateChild;
}>;

export type TQueryOneRepo = {
    query: Record<string, any>;
    selectFields?: TSelectFields;
    populateOptions?: TPopulateOptions;
};

export type TQueryRepo = TQueryOneRepo & {
    page?: number;
    limit?: number;
};

export type TSort = Record<string, ESort>;

export type TQueryRepoWithSort = TQueryRepo & {
    sort?: TSort;
};
