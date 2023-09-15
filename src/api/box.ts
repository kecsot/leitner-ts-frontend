import {BoxType} from "../@types/box.ts";

// TODO: Implement real API calls

const DATA = [] as BoxType[];
for (let i = 0; i < 100; i++) {
    DATA.push({
        id: i,
        name: `Box ${i}`,
        description: 'This is a box',
        numberOfCards: 10,
        dueCards: 5,
        leitnerSystemId: Math.floor(Math.random() * 20),
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

export const fetchBoxList = async (params: { page: number, limit: number }): Promise<{
    total: number,
    data: BoxType[]
}> => {
    console.log('fetchBoxList', params)
    const {page, limit} = params;
    console.log(params)
    await wait(1000)
    return {
        total: DATA.length,
        data: DATA.slice((page - 1) * limit, (page) * limit)
    }
}

export const postBox = async (item: BoxType) => {
    console.log('postBox', item)
    await wait(1000)
    item.numberOfCards = 0
    item.dueCards = 0
    item.createdAt = new Date()
    DATA.push(item)
    return item
}

export const patchBox = async (item: BoxType) => {
    console.log('updateBox', item)
    await wait(1000)
    DATA[item.id].name = item.name
    DATA[item.id].description = item.description
    return item
}

export const deleteBox = async (id: number) => {
    console.log('deleteBox', id)
    await wait(1000)
    const index = DATA.findIndex((i) => i.id === id)
    const found = index !== -1
    if (found) {
        DATA.splice(index, 1)
    }
    return found
}