import {BoxItem, BoxItemEventProps} from "./BoxItem.tsx"
import {BoxType} from "../../@types/box.ts";

type Props = BoxItemEventProps & {
    items: BoxType[]
}

export const BoxList = ({items, ...rest}: Props) => {

    return (
        <>
            {items.map((box) => (
                <BoxItem
                    key={box.id}
                    item={box}
                    {...rest}/>
            ))}
        </>
    )
}
