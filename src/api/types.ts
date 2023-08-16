import { Models } from "appwrite";

export type IBaseModel = {}

export type BaseType = {
    id: string
    createdAt: Date;
    updatedAt: Date;
}

export type BaseList<T extends BaseType> = {
    total: number;
    data: T[];
}

export type UserType = Models.User<Models.Preferences>


export type DeckModel = IBaseModel & {
    name: string;
    description: string;
}
export type DeckType = BaseType & DeckModel;

export type CardModel = IBaseModel & {
    text: string;
    deckId: string;
}
export type CardType = BaseType & CardModel;