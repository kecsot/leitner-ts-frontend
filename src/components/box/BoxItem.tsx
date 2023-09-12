import {Button, Card, CardActions, CardContent, CardHeader, Stack} from "@mui/material";
import {BoxType} from "../../@types/box.ts";
import Typography from "@mui/material/Typography";

export type BoxItemEventProps = {
    onViewClick?: (item: BoxType) => void
    onEditClick?: (item: BoxType) => void
    onDeleteClick?: (item: BoxType) => void
}

type Props = BoxItemEventProps & {
    item: BoxType
}

export const BoxItem = ({item, onViewClick, onEditClick, onDeleteClick}: Props) => {

    const items: { label: string, value: string }[] = [
        {label: 'Description', value: item.description},
        {label: 'Total cards', value: item.numberOfCards.toString()},
        {label: 'Cards to learn', value: item.dueCards.toString()},
    ]

    return (
        <Card>
            <CardHeader title={item.name}/>
            <CardContent>
                <div>{item.description}</div>
            </CardContent>
            <CardActions
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end'
                }}>
                {onViewClick &&
                    <Button
                        variant={'contained'}
                        onClick={() => onViewClick(item)}>
                        View
                    </Button>
                }
                {onEditClick &&
                    <Button
                        variant={'outlined'}
                        onClick={() => onEditClick(item)}>
                        Edit
                    </Button>
                }
                {onDeleteClick &&
                    <Button
                        variant={'outlined'}
                        onClick={() => onDeleteClick(item)}>
                        Delete
                    </Button>
                }
            </CardActions>
        </Card>
    )
}
