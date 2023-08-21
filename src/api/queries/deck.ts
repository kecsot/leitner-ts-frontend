import {useQuery} from "react-query"
import {fetchAllDeck, fetchDeck} from "../deck.ts";

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

export const useDeckListQuery = () => useQuery({
    queryKey: DECK_QUERY_KEYS.list(),
    queryFn: fetchAllDeck,
})