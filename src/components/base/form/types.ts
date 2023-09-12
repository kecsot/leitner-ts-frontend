export type CustomFormProps = FormikProps & {
    name: string
}

export type FormikProps = {
    formik: any // TODO: use useFormikContext hook instead of this
}

export enum DefaultFormModes {
    CREATE,
    EDIT
}