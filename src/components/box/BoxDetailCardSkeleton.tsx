import {Card, CardContent, CardHeader, Skeleton} from "@mui/material";


export const BoxDetailCardSkeleton = () => {

    return (
        <Card>
            <CardHeader
                title={
                    <Skeleton />
                }/>
            <CardContent>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
            </CardContent>
        </Card>
    )
}
