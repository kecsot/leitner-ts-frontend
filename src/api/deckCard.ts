import {CardType} from "../@types/card.ts";

// TODO: Implement real API calls

const wait = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const getDeckCardList = async (deckId: number) => {
    console.log('fetchDeck')
    await wait(500)
    return [
        {
            id: 1,
            text: `Card 1 (deckId: ${deckId})`,
            deckId: deckId,
            createdAt: new Date(),
            updatedAt: new Date(),
        } as CardType,
        {
            id: 2,
            text: `Card 2 (deckId: ${deckId})`,
            deckId: deckId,
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    ]
}