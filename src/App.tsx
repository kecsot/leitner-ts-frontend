import { QueryClient, QueryClientProvider } from "react-query"
import { Router } from "./router/router"

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
      <Router />
    </QueryClientProvider>
  )
}

export default App
