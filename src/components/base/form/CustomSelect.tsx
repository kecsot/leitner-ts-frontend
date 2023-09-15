import {FormHelperText, Select} from "@mui/material";
import {CustomFormProps} from "./types.ts";
import {SelectProps} from "@mui/material/Select/Select";
import {ReactNode} from "react";

type Props = SelectProps & CustomFormProps & {
    children: ReactNode
}

export const CustomSelect = ({name, formik, children, ...rest}: Props) => {

    const isError = !!formik.errors[name]

    return (
        <>
            <Select
                name={name}
                error={isError}
                variant='filled'
                onChange={formik.handleChange}
                value={formik.values[name]}
                disabled={formik.isSubmitting}
                {...rest}
            >
                {children}
            </Select>
            {isError && <FormHelperText error={isError}>{formik.errors[name]}</FormHelperText>}
        </>
    )
}