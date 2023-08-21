import {useQuery} from "react-query"
import {fetchDeckCards} from "../deckCard.ts";


export const DECK_CARD_QUERY_KEYS = {
    list: (filters = {}) => ['deck-cards', 'list', {filters}],
    lists: ['deck-cards', 'list'],
    detail: (id: string) => ['deck-cards', 'detail', id],
    details: ['deck-cards', 'detail'],
}

export const useDeckCardListQuery = (deckId: number) => {
    return useQuery({
        queryKey: DECK_CARD_QUERY_KEYS.list({deckId}),
        queryFn: () => fetchDeckCards(deckId),
    })
}