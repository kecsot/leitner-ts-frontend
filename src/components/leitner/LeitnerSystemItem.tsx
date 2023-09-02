import {Card, CardContent, CardHeader} from "@mui/material";
import {LeitnerSystemType} from "../../@types/leitner.ts";

type Props = {
    item: LeitnerSystemType
}

export const LeitnerSystemItem = ({item}: Props) => {

    return (
        <Card>
            <CardHeader title={item.name}/>
            <CardContent>
                <div>{item.description}</div>
                {item.levels.map((level, index) => (
                    <div key={`${item.id}-${index}`}>
                        {level.waitingTime}
                    </div>
                ))}
            </CardContent>
        </Card>
    )
}
