import {useFormik} from "formik";
import {Button, Stack} from "@mui/material";
import {CustomLoadingButton} from "./CustomLoadingButton.tsx";
import Typography from "@mui/material/Typography";

type Props = {
    onSubmit: () => void
    onCancel?: () => void
}

export const DeleteForm = ({onSubmit, onCancel}: Props) => {
    const formik = useFormik({
        initialValues: {},
        onSubmit: onSubmit
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography variant='subtitle1'>
                Are you sure you want to delete this item?
            </Typography>
            <Stack
                direction='row'
                justifyContent='flex-end'
                spacing={2}>
                <CustomLoadingButton
                    variant={'contained'}
                    formik={formik}
                    type="submit">
                    Delete
                </CustomLoadingButton>

                {onCancel && (
                    <Button
                        disabled={formik.isSubmitting}
                        variant={'outlined'}
                        onClick={onCancel}>
                        Cancel
                    </Button>
                )}
            </Stack>
        </form>
    );
};