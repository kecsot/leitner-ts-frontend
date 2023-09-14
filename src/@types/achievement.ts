import {BaseType} from "./base.ts";


export type AchievementType = BaseType & {
    key: string
    name: string
    description: string
    image: {
        thumbnailUrl: string
        url: string
    }
    acquired: boolean
    acquirePercentageOfUsers?: number
    acquiredAt?: Date
}