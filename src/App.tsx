import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProjectDashboard } from './modules/projects/Dashboard'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ProjectDashboard />
      </div>
    </QueryClientProvider>
  )
}

export default App
