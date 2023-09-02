import {Stack} from "@mui/material";
import {LeitnerSystemType} from "../../@types/leitner.ts";
import {LeitnerSystemItem} from "./LeitnerSystemItem.tsx";

type Props = {
    items: LeitnerSystemType[]
}

export const LeitnerSystemList = ({items}: Props) => {

    return (
        <Stack>
            {items.map((item) => (
                <LeitnerSystemItem
                    key={item.id}
                    item={item}/>
            ))}
        </Stack>
    )
}
