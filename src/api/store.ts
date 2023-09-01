import {BaseType} from "../@types/base.ts";
import {StoreItemType} from "../@types/store.ts";


const LIST = [] as StoreItemType<BaseType>[];
for (let i = 0; i < 35; i++) {
    LIST.push({
        id: i,
        item: {
            id: i + 10000,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
        claimedCount: Math.floor(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date(),
    } as StoreItemType<BaseType>)
}

export const fetchStoreItemList = async <T extends BaseType>(params: { page: number, limit: number }): Promise<{ total: number, data: StoreItemType<T>[] }> => {
    console.log('fetchStoreItemList', params)
    const {page, limit} = params;

    const list = LIST //  filter by type

    return {
        total: list.length,
        data: list.slice((page - 1) * limit, (page) * limit) as StoreItemType<T>[]
    }
}