import {useFormik} from "formik";
import {Button, MenuItem, Stack} from "@mui/material";
import {BoxType} from "../../@types/box.ts";
import {LeitnerSystemType} from "../../@types/leitner.ts";
import * as Yup from 'yup';
import {CustomTextField} from "../base/form/CustomTextField.tsx";
import {CustomSelect} from "../base/form/CustomSelect.tsx";
import {DefaultFormModes} from "../base/form/types.ts";
import {CustomLoadingButton} from "../base/form/CustomLoadingButton.tsx";


type Props = {
    mode: DefaultFormModes
    item?: BoxType
    leitnerSystems: LeitnerSystemType[],
    onSubmit: (values: BoxType) => void
    onCancel?: () => void
}

const BoxSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Name is too short!')
        .max(127, 'Name is too long!')
        .required('Required'),
    description: Yup.string()
        .min(5, 'Description is too short!')
        .max(127, 'Description is too long!')
        .required('Required'),
    leitnerSystemId: Yup.number().required('Required'),
});

export const BoxForm = ({mode, item, leitnerSystems, onSubmit, onCancel}: Props) => {
    const formik = useFormik({
        initialValues: {
            name: item?.name || '',
            description: item?.description || '',
            leitnerSystemId: item?.leitnerSystemId || '',
        },
        validationSchema: BoxSchema,
        onSubmit: values => {
            const data = {
                name: values.name,
                description: values.description,
                leitnerSystemId: values.leitnerSystemId,
            } as BoxType

            if (mode === DefaultFormModes.EDIT && item) {
                data.id = item.id
            }

            return onSubmit(data)  // TODO: handle error
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <Stack spacing={2}>
                <CustomTextField
                    name="name"
                    label="Deck name"
                    formik={formik}
                />

                <CustomTextField
                    name="description"
                    label="Description"
                    formik={formik}
                />

                <CustomSelect
                    name='leitnerSystemId'
                    label="Leitner System"
                    formik={formik}>
                    {leitnerSystems.map((item) => (
                        <MenuItem
                            key={item.id}
                            value={item.id}>{item.name}</MenuItem>
                    ))}
                </CustomSelect>

                <Stack
                    direction='row'
                    justifyContent='flex-end'
                    spacing={2}>
                    <CustomLoadingButton
                        variant={'contained'}
                        formik={formik}
                        type="submit">
                        {mode === DefaultFormModes.CREATE && 'Create'}
                        {mode === DefaultFormModes.EDIT && 'Save'}
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
            </Stack>
        </form>
    );
};