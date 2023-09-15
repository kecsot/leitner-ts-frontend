import {useBoxDeleteMutation} from "../../api/queries/box.ts";
import {DeleteForm} from "../../components/base/form/DeleteForm.tsx";

type Props = {
    id: number
    onSuccess: () => void
    onCancel?: () => void
}

export const BoxDeleteFormContainer = ({id, onSuccess, onCancel}: Props) => {
    const deleteMutation = useBoxDeleteMutation()

    const handleOnSubmit = () => deleteMutation.mutateAsync(id)

    if (deleteMutation.isSuccess) onSuccess()

    return <DeleteForm
        onSubmit={handleOnSubmit}
        onCancel={onCancel}
    />
}
