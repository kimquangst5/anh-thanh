import { ESort, EStatusTransaction, ETypeTransaction } from "../types";

export type TSortHistoryTransaction = {
    updatedAt?: ESort;
    username?: ESort;
    value?: ESort;
    wallet?: ESort;
    status?: ESort;
};

export type TQueryHistoryTransaction = {
    page?: number;
    limit?: number;
    status?: EStatusTransaction;
    type?: ETypeTransaction;
    search?: string;
    startDate?: Date;
    endDate?: Date;
    sort?: TSortHistoryTransaction;
};
