import {useNavigate} from "react-router-dom";
import {BoxList} from "../../components/box/BoxList.tsx";
import {useBoxListQuery} from "../../api/queries/box.ts";
import {LoadingProgressBar} from "../../components/base/LoadingProgressBar";
import Page404 from "../../pages/Page404.tsx";
import {BoxType} from "../../@types/box.ts";
import {useCustomPaginationProps} from "../../hook/useCustomPaginationProps.ts";
import {CustomPagination} from "../../components/base/CustomPagination.tsx";

export const BoxListContainer = () => {
    const navigate = useNavigate();

    const pagination = useCustomPaginationProps({
        itemsPerPage: 10
    })
    const {isLoading, data} = useBoxListQuery(pagination.requestProps, {useErrorBoundary: true})

    const onItemClicked = (box: BoxType) => {
        navigate('/boxes/detail/' + box.id)
    }

    if (isLoading) return <LoadingProgressBar/>
    if (!data) return <Page404/>

    return (
        <>
            <CustomPagination
                total={data.total}
                {...pagination.props}
            />
            <BoxList
                items={data.data}
                onViewItem={onItemClicked}
            />
        </>
    )
}
