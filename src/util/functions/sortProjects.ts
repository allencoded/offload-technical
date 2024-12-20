// src/utils/sortProjects.ts
import { IProject, PROJECT_STATUS } from '@/data/types'
import { getProjectStatus } from './getStatus'

export const sortProjects = (projects: IProject[]): IProject[] => {
  const updatedProjects = projects.map((project) => ({
    ...project,
    status: getProjectStatus(project.trucks),
  }))

  const statusOrder = {
    [PROJECT_STATUS.DELAYED]: 1,
    [PROJECT_STATUS.COMPLETED_ON_TIME]: 2,
    [PROJECT_STATUS.IN_PROGRESS]: 3,
    [PROJECT_STATUS.UNPLANNED]: 4,
  }

  return [...updatedProjects].sort((a, b) => {
    const statusA = statusOrder[a.status]
    const statusB = statusOrder[b.status]

    if (statusA === statusB) {
      return 0
    }

    return statusA - statusB
  })
}
