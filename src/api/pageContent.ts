

export const fetchPageContent = async (contentKey: string) => {
    return {
        id: 1,
        key: contentKey,
        title: `Page Title`,
        contentHtml: "<span>Page Content for "+contentKey+" </span><p>This is a page content</p>",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
}