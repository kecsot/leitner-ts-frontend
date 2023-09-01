import {PageContentType} from "../../@types/pageContent.ts";
import {Helmet} from "react-helmet";
import {Box} from "@mui/material";
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';

type Props = {
    item: PageContentType
}

export const PageContent = ({item}: Props) => {
    const sanitizeHtml = DOMPurify.sanitize(item.contentHtml);

    return (
        <>
            <Helmet>
                <title>{item.title}</title>
            </Helmet>

            <Box>
                {parse(sanitizeHtml)}
            </Box>
        </>
    )
}
