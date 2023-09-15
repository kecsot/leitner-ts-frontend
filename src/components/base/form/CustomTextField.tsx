import {FormHelperText, TextField} from "@mui/material";
import {TextFieldProps} from "@mui/material/TextField/TextField";
import {CustomFormProps} from "./types.ts";

type Props = TextFieldProps & CustomFormProps;

export const CustomTextField = ({name, formik, ...rest}: Props) => {

    const isError = !!formik.errors[name]

    return (
        <>
            <TextField
                name={name}
                error={isError}
                variant="filled"
                onChange={formik.handleChange}
                value={formik.values[name]}
                disabled={formik.isSubmitting}
                {...rest}
            />
            {isError && <FormHelperText error={isError}>{formik.errors[name]}</FormHelperText>}
        </>
    )
}