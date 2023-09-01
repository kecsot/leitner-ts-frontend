import {BaseType, PaginationRequestParams} from "./base.ts";

export enum StoreType {
    DECK = 'deck',
}

export type StoreItemType<T extends BaseType> = BaseType & {
    item: T;
    claimedCount: number;
}

export type StorePaginationRequestParams = PaginationRequestParams & {
    type: StoreType;
}