import {DeckType} from "../@types/deck.ts";

// TODO: Implement real API calls

const DATA = [] as DeckType[];
for(let i = 0; i < 100; i++){
    DATA.push({
        id: i,
        name: `Deck ${i}`,
        description: 'This is a deck',
        numberOfCards: 10,
        dueCards: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
    } as DeckType)
}

const wait = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const fetchDeck = async (id: number) => {
    console.log('fetchDeck')
    await wait(500)
    return DATA[id]
}

export const fetchAllDeck = async () => {
    console.log('fetchAllDeck')
    await wait(1000)
    return DATA;
}