import {BoxForm} from "../../components/box/BoxForm.tsx";
import {DefaultFormModes} from "../../components/base/form/types.ts";
import {useAllLeitnerSystemQuery} from "../../api/queries/leitner.ts";
import {useBoxQuery, useBoxUpdateMutation} from "../../api/queries/box.ts";

type Props = {
    boxId: number
    onCancel?: () => void
}

export const BoxFormEditContainer = ({boxId, onCancel}: Props) => {
    const boxQuery = useBoxQuery(boxId, {useErrorBoundary: true})
    const leitnerSystemsQuery = useAllLeitnerSystemQuery({useErrorBoundary: true})

    const updateMutation = useBoxUpdateMutation()

    if (leitnerSystemsQuery.isLoading || boxQuery.isLoading) return <div>loading...</div>
    if (!leitnerSystemsQuery.data || !boxQuery.data) return null

    return <BoxForm
        mode={DefaultFormModes.EDIT}
        item={boxQuery.data}
        leitnerSystems={leitnerSystemsQuery.data}
        onSubmit={updateMutation.mutateAsync}
        onCancel={onCancel}
    />
}
