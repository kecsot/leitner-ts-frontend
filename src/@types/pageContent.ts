import {BaseType} from "./base.ts";

export type PageContentType = BaseType & {
    key: string
    title: string
    contentHtml: string
}