import {BaseType} from "./base.ts";

export type DeckType = BaseType & {
    name: string;
    description: string;
    numberOfCards: number;
    dueCards: number;
};