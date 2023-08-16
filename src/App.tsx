import {QueryClient, QueryClientProvider} from "react-query"
import {Router} from "./router/router"
import {ErrorBoundary} from "react-error-boundary";
import {CssBaseline, ThemeProvider} from "@mui/material";
import theme from "./theme/theme.ts";

function App() {
    const queryClient = new QueryClient()

    queryClient.setDefaultOptions({
        queries: {
            staleTime: 1000 * 5,
            cacheTime: 1000 * 8,
        },
    })

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <QueryClientProvider client={queryClient}>
                <ErrorBoundary fallback={<div>Something went wrong</div>}>
                    <Router/>
                </ErrorBoundary>
            </QueryClientProvider>
        </ThemeProvider>
    )
}

export default App
