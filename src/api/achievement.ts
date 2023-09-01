import {AchievementType} from "../@types/achievement.ts";


const DATA = [] as AchievementType[];
for (let i = 0; i < 30; i++) {
    const isAcquired = Math.random() > 0.5;

    DATA.push({
        id: i,
        key: `achievement-${i}`,
        name: `Achievement ${i}`,
        description: 'This is a achievement',
        acquired: isAcquired,
        acquiredAt: isAcquired ? new Date() : undefined,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

export const fetchAllAchievement = async () => {
    return DATA;
}
