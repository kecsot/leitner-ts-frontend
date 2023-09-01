import {UseQueryOptions} from "react-query/types/react/types";
import {useQuery} from "react-query";
import {fetchPageContent} from "../pageContent.ts";
import {PageContentType} from "../../@types/pageContent.ts";

export const PAGE_CONTENT_QUERY_KEYS = {
    detail: (key: string) => ['page-content', key],
}

export const usePageContentQuery = (contentKey: string, options?: UseQueryOptions<PageContentType>) => {
    return useQuery({
        queryKey: PAGE_CONTENT_QUERY_KEYS.detail(contentKey),
        queryFn: () => fetchPageContent(contentKey),
        ...options
    })
}