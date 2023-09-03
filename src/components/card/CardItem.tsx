import {Card, CardContent, CardHeader} from "@mui/material";
import {CardType} from "../../@types/card.ts";

type Props = {
    item: CardType
}

export const CardItem = ({item}: Props) => {

    return (
        <Card>
            <CardHeader title={item.id}/>
            <CardContent>
                <div>{item.text}</div>
            </CardContent>
        </Card>
    )
}
