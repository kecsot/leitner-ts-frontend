import {QueryClient, QueryClientProvider} from "react-query"
import {Router} from "./router/router"
import {ErrorBoundary} from "react-error-boundary";

function App() {
    const queryClient = new QueryClient()

    queryClient.setDefaultOptions({
        queries: {
            staleTime: 1000 * 5,
            cacheTime: 1000 * 8,
        },
    })

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary fallback={<div>Something went wrong</div>}>
                <Router/>
            </ErrorBoundary>
        </QueryClientProvider>
    )
}

export default App
