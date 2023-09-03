import {Pagination} from "@mui/material";
import {UsePaginationProps} from "@mui/material/usePagination/usePagination";

export type CustomPaginationProps = UsePaginationProps & {
    total: number,
    itemsPerPage: number,
}

/**
 * This custom component calculate the number of pages based on the total number of items and the number of items per page.
 * Now it works similar than TablePagination component.
 *
 * @param total
 * @param itemsPerPage
 * @param other
 * @constructor
 */
export const CustomPagination = ({total, itemsPerPage, ...other}: CustomPaginationProps) => {

    return (
        <Pagination
            count={Math.ceil(total / itemsPerPage)}
            {...other}/>
    )
}
