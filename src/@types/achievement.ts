import {BaseType} from "./base.ts";


export type AchievementType = BaseType & {
    name: string
    description: string
    acquired: boolean
    acquiredAt?: Date
}