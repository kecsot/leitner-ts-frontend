import {Grid} from "@mui/material";
import {LeitnerSystemType} from "../../@types/leitner.ts";
import {LeitnerSystemItem} from "./LeitnerSystemItem.tsx";

type Props = {
    items: LeitnerSystemType[]
}

export const LeitnerSystemList = ({items}: Props) => {

    return (
        <Grid
            container
            spacing={2}>
            {items.map((item) => (
                <Grid
                    sm={4}
                    item>
                    <LeitnerSystemItem
                        key={item.id}
                        item={item}/>
                </Grid>
            ))}
        </Grid>
    )
}
