import {BaseType} from "./base.ts";


export type AchievementType = BaseType & {
    key: string
    name: string
    description: string
    acquired: boolean
    acquiredAt?: Date
}