export type BaseType = {
    id: number
    createdAt: Date;
    updatedAt: Date;
}

export type Pagination<T> = {
    total: number,
    page: number,
    limit: number,
    data: T[],
}

export type PaginationRequestParams = {
    page: number,
    limit: number,
}