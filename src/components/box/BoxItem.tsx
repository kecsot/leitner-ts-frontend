import {Button, Card, CardActions, CardContent, CardHeader} from "@mui/material";
import {BoxType} from "../../@types/box.ts";

export type BoxItemEventProps = {
    onViewClick?: (item: BoxType) => void
    onEditClick?: (item: BoxType) => void
    onDeleteClick?: (item: BoxType) => void
}

type Props = BoxItemEventProps & {
    item: BoxType
}

export const BoxItem = ({item, onViewClick, onEditClick, onDeleteClick}: Props) => {

    return (
        <Card>
            <CardHeader title={item.name}/>
            <CardContent>
                <div>{item.description}</div>
            </CardContent>
            <CardActions>
                {onViewClick && <Button onClick={() => onViewClick(item)}>View</Button>}
                {onEditClick && <Button onClick={() => onEditClick(item)}>Edit</Button>}
                {onDeleteClick && <Button onClick={() => onDeleteClick(item)}>Delete</Button>}
            </CardActions>
        </Card>
    )
}
