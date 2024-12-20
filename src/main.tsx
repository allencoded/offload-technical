import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App.tsx'
import './index.css'
import { ProjectDetail } from './pages/projects/[id]/Details.tsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
    </QueryClientProvider>
  </BrowserRouter>,
)
