import {Card, CardContent, CardHeader, Stack, Typography} from "@mui/material";
import {LeitnerSystemType} from "../../@types/leitner.ts";
import {LeitnerSystemLevelTimeline} from "./LeitnerSystemLevelTimeline.tsx";

type Props = {
    item: LeitnerSystemType
}

export const LeitnerSystemItem = ({item}: Props) => {

    return (
        <Card sx={{height: '100%'}}>
            <CardHeader title={item.name}/>
            <CardContent>
                <Stack spacing={2}>
                    <Typography variant='body1'>
                        {item.description}
                    </Typography>

                    <Card variant='outlined'>
                        <CardContent>
                            <LeitnerSystemLevelTimeline
                                item={item}/>
                        </CardContent>
                    </Card>
                </Stack>
            </CardContent>
        </Card>
    )
}
