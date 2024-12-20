import { useProjectStore } from '@/store/useProjectStore'
import { sortProjects } from '@/util/functions/sortProjects'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useEffect } from 'react'
import { ProjectsDashboard } from './components/Dashboard'
import { ErrorEndpoint } from './components/Error'

export const ProjectsList = () => {
  const { setProjects, projects: sortedProjects } = useProjectStore()

  const { isLoading, data, error } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/projects')
      return response.data
    },
  })

  useEffect(() => {
    if (data) {
      const sortedProjects = sortProjects(data)
      setProjects(sortedProjects)
    }
  }, [data]) //eslint-disable-line

  return (
    <>
      <div className="h-[fit-max-content] min-h-screen w-[fit-max-content] bg-unplanned-lightest">
        <div className="flex flex-col z-10 justify-center items-center relative pt-[41px]">
          <img src="/logo-offload.svg" alt="logo" className="w-1/2 h-auto" />
          {error ? (
            <ErrorEndpoint error={error} />
          ) : (
            <ProjectsDashboard
              projects={sortedProjects}
              isLoading={isLoading}
            />
          )}
        </div>
      </div>
      <div className="bg-primary w-full h-[13rem] absolute top-0 left-0 rounded-b-3xl z-0" />
    </>
  )
}
