import {useCallback, useMemo, useState} from "react";

enum Operations {
    CREATE = 'create',
    EDIT = 'edit',
    DELETE = 'delete',
}

export const useCrudOperation = <T>() => {
    const [operation, setOperation] = useState<string | undefined>(undefined)
    const [operationSelectedItem, setOperationSelectedItem] = useState<T | undefined>(undefined)

    const selectCreateOperation = () => setOperation(Operations.CREATE)
    const selectEditOperation = (item?: T) => {
        setOperation(Operations.EDIT)
        setOperationSelectedItem(item)
    }
    const selectDeleteOperation = (item?: T) => {
        setOperation(Operations.DELETE)
        setOperationSelectedItem(item)
    }

    const selectCustomOperation = (operation: string) => setOperation(operation)

    const resetOperationSelection = () => setOperation(undefined)

    const isOperationEqual = useCallback((value: string) => operation === value, [operation])

    const isCreateOperation = useMemo(() => operation === Operations.CREATE, [operation])

    const isEditOperation = useMemo(() => operation === Operations.EDIT, [operation])

    const isDeleteOperation = useMemo(() => operation === Operations.DELETE, [operation])

    const isOperationSelected = useMemo(() => !!operation, [operation])

    return {
        selectCreateOperation,
        selectEditOperation,
        selectDeleteOperation,
        selectCustomOperation,
        resetOperationSelection,

        operationSelectedItem,

        isCreateOperation,
        isEditOperation,
        isDeleteOperation,
        isOperationEqual,
        isOperationSelected,
    }
}