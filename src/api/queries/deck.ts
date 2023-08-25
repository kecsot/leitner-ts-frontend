import {useQuery, UseQueryResult} from "react-query"
import {fetchAllDeck, fetchDeck, fetchDeckList} from "../deck.ts";
import {DeckType} from "../../@types/deck.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";

export const DECK_QUERY_KEYS = {
    list: (filters = {}) => ['decks', 'list', {filters}],
    lists: ['decks', 'list'],
    detail: (id: number) => ['decks', 'detail', id],
    details: ['decks', 'detail'],
}

export const useDeckQuery = (deckId: number) => useQuery({
    queryKey: DECK_QUERY_KEYS.detail(deckId),
    queryFn: () => fetchDeck(deckId),
})

export const useAllDeckQuery = () => useQuery({
    queryKey: DECK_QUERY_KEYS.list(),
    queryFn: fetchAllDeck,
})

export const useDeckListQuery = (params: PaginationRequestParams): UseQueryResult<Pagination<DeckType>> => useQuery({
    queryKey: DECK_QUERY_KEYS.list({params}),
    queryFn: () => fetchDeckList(params)
})