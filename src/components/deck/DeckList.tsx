import { DeckItem } from "./DeckItem.tsx"
import {DeckType} from "../../@types/deck.ts";

type Props = {
    items: DeckType[]
    onViewItem: (item: DeckType) => void
}

export const DeckList = ({ items, onViewItem: onItemView }: Props) => {

    return (
        <>
            {items.map((deck) => (
                <DeckItem
                    key={deck.id}
                    item={deck}
                    onClick={() => onItemView(deck)} />
            ))}
        </>
    )
}
