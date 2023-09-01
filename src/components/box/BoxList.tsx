import {BoxItem} from "./BoxItem.tsx"
import {BoxType} from "../../@types/box.ts";

type Props = {
    items: BoxType[]
    onViewItem: (item: BoxType) => void
}

export const BoxList = ({items, onViewItem: onItemView}: Props) => {

    return (
        <>
            {items.map((box) => (
                <BoxItem
                    key={box.id}
                    item={box}
                    onClick={() => onItemView(box)}/>
            ))}
        </>
    )
}
