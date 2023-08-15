import { CardModel, CardType, DeckModel, DeckType } from "../types";
import { useBaseResource } from "./base/useBaseResource";

const deckCollectionId = import.meta.env.VITE_APPWRITE_COLLECTION_DECK || ''
export const useDeckResource = () => useBaseResource<DeckModel, DeckType>(deckCollectionId)

const cardCollectionId = import.meta.env.VITE_APPWRITE_COLLECTION_CARD || ''
export const useCardResource = () => useBaseResource<CardModel, CardType>(cardCollectionId)