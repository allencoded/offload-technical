import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProjectsSummary } from './Dashboard'

export const ProjectsDashboard = () => {
  const { isLoading, data: projects } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/projects')
      return response.data
    },
  })

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <ProjectsSummary projects={projects} isLoading={isLoading} />
      </div>
    </div>
  )
}
