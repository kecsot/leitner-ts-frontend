import React, {useMemo, useState} from "react";
import {PaginationRequestParams} from "../@types/base.ts";
import {CustomPaginationProps} from "../components/base/CustomPagination.tsx";

type Props = {
    defaultPage?: number,
    itemsPerPage: number,
}

export const useCustomPaginationProps = ({defaultPage = 1, itemsPerPage}: Props) => {
    const [page, setPage] = useState<number>(defaultPage)

    const props = useMemo(() => {
        return {
            page,
            itemsPerPage,
            onChange: (_event: React.ChangeEvent<unknown> | null, page: number) => setPage(page),
        } as Omit<CustomPaginationProps, 'total'>
    }, [page, itemsPerPage])

    const requestProps: PaginationRequestParams = useMemo(() => {
        return {
            page,
            limit: itemsPerPage
        }
    }, [page, itemsPerPage])

    return {
        props,
        requestProps
    }
}