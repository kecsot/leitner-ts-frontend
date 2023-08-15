type Props = {
    isLoading: boolean
}

export const LoadingProgressBar = ({ isLoading }: Props) => {

    if (!isLoading) return null

    return (
        <div>Loading...</div>
    )
}
