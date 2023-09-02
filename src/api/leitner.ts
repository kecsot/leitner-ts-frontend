import {LeitnerSystemType} from "../@types/leitner.ts";

const DATA = [] as LeitnerSystemType[];
for (let i = 0; i < 100; i++) {

    const random = Math.random() * 10;
    const levels = [];
    for (let j = 0; j < random; j++) {
        levels.push({
            waitingTime: Math.random() * 1000
        })
    }

    DATA.push({
        id: i,
        name: `LeitnerSystem ${i}`,
        description: 'This is a LeitnerSystem',
        levels: levels,
        createdAt: new Date(),
        updatedAt: new Date(),
    } as LeitnerSystemType)
}

export const fetchLeitnerSystemList = async (params: { page: number, limit: number }): Promise<{
    total: number,
    data: LeitnerSystemType[]
}> => {
    console.log('fetchLeitnerSystemList', params)
    const {page, limit} = params;
    return {
        total: DATA.length,
        data: DATA.slice((page - 1) * limit, (page) * limit)
    }
}