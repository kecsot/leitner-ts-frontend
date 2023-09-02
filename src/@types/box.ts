import {BaseType} from "./base.ts";

export type BoxType = BaseType & {
    name: string;
    description: string;
    numberOfCards: number;
    dueCards: number;
    leitnerSystemId: number;
};