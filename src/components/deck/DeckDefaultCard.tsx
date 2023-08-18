import { DeckType } from "../../api/types"
import {Card, CardContent, CardHeader} from "@mui/material";

type Props = {
    item: DeckType
}

export const DeckDefaultDetail = ({item}: Props) => {

    return (
        <Card>
            <CardHeader title={item.name} />
            <CardContent>
                <div>{item.description}</div>
                <div>{item.createdAt.toISOString()}</div>
                <div>{item.updatedAt.toISOString()}</div>
            </CardContent>
        </Card>
    )
}
