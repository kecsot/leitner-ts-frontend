import {CardType} from "../../api/types"
import {Card, CardContent, CardHeader} from "@mui/material";

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
