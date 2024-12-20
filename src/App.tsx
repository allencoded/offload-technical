import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ProjectsList } from './modules/projects'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ProjectsList />
      </QueryClientProvider>
    </div>
  )
}

export default App
