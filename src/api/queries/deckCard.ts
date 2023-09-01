import {useQuery} from "react-query"
import {fetchDeckCardList} from "../deckCard.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {CardType} from "../../@types/card.ts";
import {UseQueryOptions} from "react-query/types/react/types";


export const DECK_CARD_QUERY_KEYS = {
    list: (filters = {}) => ['deck-cards', 'list', {filters}],
    lists: ['deck-cards', 'list'],
    detail: (id: string) => ['deck-cards', 'detail', id],
    details: ['deck-cards', 'detail'],
}

export const useDeckCardListQuery = (deckId: number, params: PaginationRequestParams, options?: UseQueryOptions<Pagination<CardType>>) => {
    return useQuery({
        queryKey: DECK_CARD_QUERY_KEYS.list({deckId, params}),
        queryFn: () => fetchDeckCardList(deckId, params).then((data) => data as Pagination<CardType>),
        ...options
    })
}