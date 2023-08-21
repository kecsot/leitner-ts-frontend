export type BaseType = {
    id: number
    createdAt: Date;
    updatedAt: Date;
}

export type BaseList<T> = {
    total: number;
    data: T[];
}