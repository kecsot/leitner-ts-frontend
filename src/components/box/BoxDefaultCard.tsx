
import {Card, CardContent, CardHeader} from "@mui/material";
import {BoxType} from "../../@types/box.ts";

type Props = {
    item: BoxType
}

export const BoxDefaultDetail = ({item}: Props) => {

    return (
        <Card>
            <CardHeader title={item.name} />
            <CardContent>
                <div>{item.description}</div>
                <div>{item.leitnerSystemId}</div>
                <div>{item.createdAt.toISOString()}</div>
                <div>{item.updatedAt.toISOString()}</div>
            </CardContent>
        </Card>
    )
}
