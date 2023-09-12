import {Button, ButtonProps, CircularProgress} from "@mui/material";
import {FormikProps} from "./types.ts";
import {ReactNode} from "react";

type Props = ButtonProps & FormikProps & {
    children: ReactNode
}

export const CustomLoadingButton = ({formik, children, ...rest}: Props) => {

    return (
        <Button
            startIcon={formik.isSubmitting ? <CircularProgress size={16}/> : undefined}
            disabled={formik.isSubmitting}
            {...rest}
        >
            {children}
        </Button>
    )
}