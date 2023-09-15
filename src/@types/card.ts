import {BaseType} from "./base.ts";

export type CardType = BaseType & {
    text: string;
    boxId: number;
}