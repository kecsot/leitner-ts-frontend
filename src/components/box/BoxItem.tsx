
import {Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {BoxType} from "../../@types/box.ts";

type Props = {
    item: BoxType
    onClick: () => void
}

export const BoxItem = ({item, onClick}: Props) => {

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
