import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ProjectsOverview } from '../dashboard'

export const ProjectDashboard = () => {
  const {
    isLoading,
    error,
    data: projects,
  } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/trucks')
      return response.data
    },
  })

  if (isLoading) return 'Carregando projetos...'

  if (error) return `Erro ao carregar projetos: ${error.message}`

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <ProjectsOverview projects={projects} />
      </div>
    </div>
  )
}
