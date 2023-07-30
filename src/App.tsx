import { QueryClient, QueryClientProvider } from "react-query"
import { Router } from "./router/router"

function App() {
  const queryClient = new QueryClient()

  return (
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
  )
}

export default App
