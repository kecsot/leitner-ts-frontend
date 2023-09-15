import {Card, CardContent, CardHeader, Stack} from "@mui/material";
import {BoxType} from "../../@types/box.ts";
import Typography from "@mui/material/Typography";
import {formatDate} from "../../utils/dateFormatter.ts";

type Props = {
    item: BoxType
}

export const BoxDetailCard = ({item}: Props) => {

    const items: { label: string, value: string }[] = [
        {label: 'Description', value: item.description},
        {label: 'Total cards', value: item.numberOfCards.toString()},
        {label: 'Cards to learn', value: item.dueCards.toString()},
        {label: 'Created', value: formatDate(item.createdAt)},
        {label: 'Updated', value: formatDate(item.updatedAt)},
    ]

    return (
        <Card>
            <CardHeader title={item.name}/>
            <CardContent>
                {items.map(({label, value}) => (
                    <Stack
                        key={label}
                        direction='row'
                        justifyContent='space-between'>
                        <Typography variant='caption'>
                            {label}
                        </Typography>
                        <Typography>
                            {value}
                        </Typography>
                    </Stack>
                ))}
            </CardContent>
        </Card>
    )
}
