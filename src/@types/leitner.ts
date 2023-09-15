import {BaseType} from "./base.ts";

export type LeitnerLevel = {
    waitingTime: number;
}

export type LeitnerSystemType = BaseType & {
    name: string;
    description: string;
    levels: LeitnerLevel[];
}