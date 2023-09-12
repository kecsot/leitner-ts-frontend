import {BoxItem, BoxItemEventProps} from "./BoxItem.tsx"
import {BoxType} from "../../@types/box.ts";
import {Grid} from "@mui/material";

type Props = BoxItemEventProps & {
    items: BoxType[]
}

export const BoxList = ({items, ...rest}: Props) => {

    return (
        <Grid container spacing={2}>
            {items.map((box) => (
                <Grid xs={12} md={6} item>
                    <BoxItem
                        key={box.id}
                        item={box}
                        {...rest}/>
                </Grid>
            ))}
        </Grid>
    )
}
