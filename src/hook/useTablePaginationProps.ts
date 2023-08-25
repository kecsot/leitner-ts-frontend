import React, {useMemo, useState} from "react";
import {PaginationRequestParams} from "../@types/base.ts";
import {TablePaginationProps} from "@mui/material/TablePagination/TablePagination";

type Props = {
    defaultPage: number,
    defaultRowsPerPage: number,
}

export const useTablePaginationProps = ({defaultPage, defaultRowsPerPage}: Props) => {
    const [page, setPage] = useState<number>(defaultPage ?? 0)
    const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage ?? 10)

    const tablePaginationProps: TablePaginationProps = useMemo(() => {
        return {
            page,
            rowsPerPage,
            onPageChange: (_event: React.MouseEvent<HTMLButtonElement> | null, page: number) => setPage(page),
            onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => setRowsPerPage(+event.target.value ?? 0)
        } as TablePaginationProps
    }, [page, rowsPerPage])

    const paginationRequestParams: PaginationRequestParams = useMemo(() => {
        return {
            page,
            limit: rowsPerPage
        }
    }, [page, rowsPerPage])

    return {
        tablePaginationProps,
        requestProps: paginationRequestParams
    }
}