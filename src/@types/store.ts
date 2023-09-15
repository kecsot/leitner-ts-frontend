import {BaseType, PaginationRequestParams} from "./base.ts";

export enum StoreType {
    BOX = 'box',
}

export type StoreItemType<T extends BaseType> = BaseType & {
    item: T;
    claimedCount: number;
}

export type StorePaginationRequestParams = PaginationRequestParams & {
    type: StoreType;
}