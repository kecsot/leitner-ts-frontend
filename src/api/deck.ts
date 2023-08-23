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

export const fetchDeckList =  async (params: {page: number, limit: number}): Promise<{total: number, data: DeckType[]}> => {
    console.log('fetchDeckList', params)
    const {page, limit} = params;
    console.log(params)
    return {
        total: DATA.length,
        data: DATA.slice((page-1) * limit, (page ) * limit)
    }
}