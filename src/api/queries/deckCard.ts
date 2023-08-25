import {useQuery, UseQueryResult} from "react-query"
import {fetchDeckCardList} from "../deckCard.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {CardType} from "../../@types/card.ts";


export const DECK_CARD_QUERY_KEYS = {
    list: (filters = {}) => ['deck-cards', 'list', {filters}],
    lists: ['deck-cards', 'list'],
    detail: (id: string) => ['deck-cards', 'detail', id],
    details: ['deck-cards', 'detail'],
}

export const useDeckCardListQuery = (deckId: number, params: PaginationRequestParams): UseQueryResult<Pagination<CardType>> => {
    return useQuery({
        queryKey: DECK_CARD_QUERY_KEYS.list({deckId, params}),
        queryFn: () => fetchDeckCardList(deckId, params),
    })
}