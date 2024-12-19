import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProjectsDashboard } from './modules/projects'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ProjectsDashboard />
      </QueryClientProvider>
    </div>
  )
}

export default App
