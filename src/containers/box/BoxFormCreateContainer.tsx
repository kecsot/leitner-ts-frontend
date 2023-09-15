import {BoxForm} from "../../components/box/BoxForm.tsx";
import {DefaultFormModes} from "../../components/base/form/types.ts";
import {useAllLeitnerSystemQuery} from "../../api/queries/leitner.ts";
import {useBoxCreateMutation} from "../../api/queries/box.ts";

type Props = {
    onSuccess: () => void
    onCancel?: () => void
}

export const BoxFormCreateContainer = ({onSuccess, onCancel}: Props) => {
    const {isLoading, data} = useAllLeitnerSystemQuery({useErrorBoundary: true})
    const createMutation = useBoxCreateMutation()

    if (createMutation.isSuccess) onSuccess()
    if (isLoading) return <div>loading...</div>

    return <BoxForm
        mode={DefaultFormModes.CREATE}
        leitnerSystems={data || []}
        onSubmit={createMutation.mutateAsync}
        onCancel={onCancel}
    />
}
