import {useQuery} from "react-query"
import {fetchAllDeck, fetchDeck, fetchDeckList} from "../deck.ts";
import {DeckType} from "../../@types/deck.ts";
import {Pagination, PaginationRequestParams} from "../../@types/base.ts";
import {UseQueryOptions} from "react-query/types/react/types";

export const DECK_QUERY_KEYS = {
    list: (filters = {}) => ['decks', 'list', {filters}],
    lists: ['decks', 'list'],
    detail: (id: number) => ['decks', 'detail', id],
    details: ['decks', 'detail'],
}

export const useDeckQuery = (deckId: number, options?: UseQueryOptions<DeckType>) => useQuery({
    queryKey: DECK_QUERY_KEYS.detail(deckId),
    queryFn: () => fetchDeck(deckId),
    ...options
})

export const useAllDeckQuery = (options?: UseQueryOptions<DeckType[]>) => useQuery({
    queryKey: DECK_QUERY_KEYS.list(),
    queryFn: fetchAllDeck,
    ...options
})

export const useDeckListQuery = (params: PaginationRequestParams, options?: UseQueryOptions<Pagination<DeckType>>) => {
    return useQuery({
        queryKey: DECK_QUERY_KEYS.list(params),
        queryFn: () => fetchDeckList(params).then((data) => data as Pagination<DeckType>),
        ...options
    })
}