import {BaseType} from "./base.ts";

export type CardType = BaseType & {
    text: string;
    deckId: number;
}