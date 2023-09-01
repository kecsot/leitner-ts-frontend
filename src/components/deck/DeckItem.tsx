
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {DeckType} from "../../@types/deck.ts";

type Props = {
    item: DeckType
    onClick: () => void
}

export const DeckItem = ({item, onClick}: Props) => {

    return (
        <Card>
            <CardHeader title={item.name} />
            <CardContent>
                <div>{item.description}</div>
            </CardContent>
            <CardActions>
                <button onClick={onClick}>View</button>
            </CardActions>
        </Card>
    )
}
