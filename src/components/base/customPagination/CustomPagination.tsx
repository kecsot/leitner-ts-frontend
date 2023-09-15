import {Pagination} from "@mui/material";
import {UsePaginationProps} from "@mui/material/usePagination/usePagination";

export type CustomPaginationProps = UsePaginationProps & {
    total: number,
    itemsPerPage: number,
    showSingleItem?: boolean
}

/**
 * This custom component calculate the number of pages based on the total number of items and the number of items per page.
 * Now it works similar than TablePagination component.
 *
 * @param total
 * @param itemsPerPage
 * @param showSingleItem
 * @param other
 * @constructor
 */
export const CustomPagination = ({total, itemsPerPage, showSingleItem, ...other}: CustomPaginationProps) => {

    const numberOfPages = Math.ceil(total / itemsPerPage)

    if (!showSingleItem && numberOfPages === 1) return null

    return (
        <Pagination
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            count={Math.ceil(total / itemsPerPage)}
            {...other}/>
    )
}
