import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProjectsList } from './pages/projects'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProjectsList />
    </QueryClientProvider>
  )
}

export default App
