import {useQuery} from "react-query"
import {fetchBoxCardList} from "../boxCard.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {CardType} from "../../@types/card.ts";
import {UseQueryOptions} from "react-query/types/react/types";


export const BOX_CARD_QUERY_KEYS = {
    list: (filters = {}) => ['box-cards', 'list', {filters}],
    lists: ['box-cards', 'list'],
    detail: (id: string) => ['box-cards', 'detail', id],
    details: ['box-cards', 'detail'],
}

export const useBoxCardListQuery = (boxId: number, params: PaginationRequestParams, options?: UseQueryOptions<Pagination<CardType>>) => {
    return useQuery({
        queryKey: BOX_CARD_QUERY_KEYS.list({boxId, params}),
        queryFn: () => fetchBoxCardList(boxId, params).then((data) => data as Pagination<CardType>),
        ...options
    })
}