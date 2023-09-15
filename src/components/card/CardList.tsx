import {Stack} from "@mui/material";
import {CardItem} from "./CardItem.tsx";
import { CardType } from "../../@types/card.ts";

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
