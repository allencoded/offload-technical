import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { IProject, PROJECT_STATUS } from '@/data/types'
import { getProjectStatus } from '@/util/functions/getStatus'
import { ChevronRight, Truck } from 'lucide-react'
import { useMemo } from 'react'
import { Link } from 'react-router'

export const ProjectCard = ({ project }: { project: IProject }) => {
  const status = useMemo(
    () => getProjectStatus(project?.trucks),
    [project?.trucks],
  )

  if (project.status === PROJECT_STATUS.DELAYED) {
    return (
      <section
        id={`card-${project.id}`}
        className="rounded-2xl shadow-lg transition-colors bg-white"
      >
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="flex flex-row justify-between w-full">
            <div className="flex flex-row items-center gap-2">
              <Truck className="w-4 h-4 text-black mb-[2px]" />
              <h3 className="font-medium">{project.name}</h3>
            </div>

            <Badge variant={'delayed'}>{status.toUpperCase()}</Badge>
          </div>
        </div>

        <img
          src="/map-delayed.png"
          alt="delayed"
          className="w-full h-auto px-4 my-4"
        />

        <div className="flex items-center gap-2 px-4">
          <span className="text-[1rem] font-bold text-primary">
            {project?.trucks?.length}
            {project?.trucks?.length === 1 ? ' Truck' : ' Trucks'}
          </span>
        </div>

        <Separator className="my-2 bg-unplanned-lightest h-[2px]" />

        <Link
          to={`/projects/${project.id}`}
          className="flex justify-between items-start mb-3 px-4 pb-4 pt-3"
        >
          <span className="text-[16px] font-medium text-delayed">
            View details
          </span>
          <ChevronRight className="w-5 h-5 text-delayed" />
        </Link>
      </section>
    )
  }

  return (
    <section
      id={`card-${project.id}`}
      className="rounded-2xl shadow-lg transition-colors bg-white"
    >
      <div className="flex justify-between items-center px-4 pt-4">
        <div className="flex flex-row items-center gap-2">
          <Truck className="w-4 h-4 text-black mb-[2px]" />
          <h3 className="font-medium">{project.name}</h3>
        </div>

        <Badge
          variant={
            status === PROJECT_STATUS.DELAYED
              ? 'delayed'
              : status === PROJECT_STATUS.IN_PROGRESS
              ? 'process'
              : status === PROJECT_STATUS.COMPLETED_ON_TIME
              ? 'completed'
              : 'unplanned'
          }
        >
          {status}
        </Badge>
      </div>

      <div className="flex items-center gap-2 px-4">
        <span className="text-[24px] font-bold text-primary">
          {project?.trucks?.length}
          {project?.trucks?.length === 1 ? ' Truck' : ' Trucks'}
        </span>
      </div>

      <Separator className="my-2 bg-unplanned-lightest h-[2px]" />

      <Link
        to={`/projects/${project.id}`}
        className="flex justify-between items-start mb-3 px-4 pb-4 pt-3"
      >
        <span className="text-[16px] font-medium">View details</span>
        <ChevronRight className="w-5 h-5" />
      </Link>
    </section>
  )
}
