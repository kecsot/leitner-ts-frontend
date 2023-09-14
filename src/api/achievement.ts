import {AchievementType} from "../@types/achievement.ts";


const DATA = [] as AchievementType[];
for (let i = 0; i < 30; i++) {
    const isAcquired = Math.random() > 0.5;

    DATA.push({
        id: i,
        key: `achievement-${i}`,
        name: `Achievement ${i}`,
        description: 'This is a achievement',
        image: {
            thumbnailUrl: `https://picsum.photos/20/20?random=${i}-small` + Math.random(),
            url: `https://picsum.photos/200/200?random=${i}-big-` + Math.random(),
        },
        acquired: isAcquired,
        acquiredAt: isAcquired ? new Date() : undefined,
        acquirePercentageOfUsers: Math.round(Math.random() * 100),
        createdAt: new Date(),
        updatedAt: new Date(),
    })
}

export const fetchAllAchievement = async () => {
    return DATA;
}
