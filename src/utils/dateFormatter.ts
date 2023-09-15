
export const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}


export const formatLeitnerBoxTime = (timestamp: number): string => {
    // TODO impl
    return '1 days 2 hours'
}