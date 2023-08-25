import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import Page404 from "../../pages/Page404.tsx";
import {usePageContentQuery} from "../../api/queries/pageContent.ts";
import {PageContent} from "../../components/pageContent/PageContent.tsx";

type Props = {
    contentKey: string
}

export const PageContentContainer = ({contentKey}: Props) => {
    const {isLoading, data} = usePageContentQuery(contentKey, {useErrorBoundary: true})

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <PageContent item={data}/>
    )
}
