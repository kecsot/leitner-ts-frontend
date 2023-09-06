import {BoxForm} from "../../components/box/BoxForm.tsx";
import {DefaultFormModes} from "../../components/base/form/types.ts";
import {useAllLeitnerSystemQuery} from "../../api/queries/leitner.ts";
import {useBoxCreateMutation} from "../../api/queries/box.ts";

export const BoxFormCreateContainer = () => {
    const {isLoading, data} = useAllLeitnerSystemQuery({useErrorBoundary: true})
    const createMutation = useBoxCreateMutation()

    if (isLoading) return <div>loading...</div>

    return <BoxForm
        mode={DefaultFormModes.CREATE}
        leitnerSystems={data || []}
        onSubmit={createMutation.mutateAsync}
    />
}
