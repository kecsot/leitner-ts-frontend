import Stack from "@mui/material/Stack"
import {CircularProgress} from "@mui/material";
import Typography from "@mui/material/Typography";

export const LoadingProgressContent = () => {

    return (
        <Stack
            spacing={2}
            sx={{m: 2}}
            justifyContent='center'
            alignItems='center'>

            <CircularProgress variant='indeterminate'/>
            <Typography variant='subtitle1'>
                Pulling down bits from the cloud...
            </Typography>

        </Stack>
    )
}
