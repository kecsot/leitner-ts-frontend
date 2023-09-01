import {BoxType} from "../@types/box.ts";

// TODO: Implement real API calls

const DATA = [] as BoxType[];
for(let i = 0; i < 100; i++){
    DATA.push({
        id: i,
        name: `Box ${i}`,
        description: 'This is a box',
        numberOfCards: 10,
        dueCards: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
    } as BoxType)
}

const wait = (ms: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}

export const fetchBox = async (id: number) => {
    console.log('fetchBox')
    await wait(500)
    return DATA[id]
}

export const fetchAllBox = async () => {
    console.log('fetchAllBox')
    await wait(1000)
    return DATA;
}

export const fetchBoxList =  async (params: {page: number, limit: number}): Promise<{total: number, data: BoxType[]}> => {
    console.log('fetchBoxList', params)
    const {page, limit} = params;
    console.log(params)
    return {
        total: DATA.length,
        data: DATA.slice((page-1) * limit, (page ) * limit)
    }
}