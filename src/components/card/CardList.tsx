import {CardType} from "../../api/types"
import {Stack} from "@mui/material";
import {CardItem} from "./CardItem.tsx";

type Props = {
    items: CardType[]
}

export const CardList = ({items}: Props) => {

    return (
        <Stack>
            {items.map((card) => (
                <CardItem key={card.id} item={card}/>
            ))}
        </Stack>
    )
}
