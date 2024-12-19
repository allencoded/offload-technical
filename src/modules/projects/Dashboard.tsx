import { TooltipSimple } from '@/components/custom/TooltipCustom'
import { Card, CardContent } from '@/components/ui/card'
import { IProject } from '@/data/types'
import { useResponsive } from '@/hooks/useResponsive'
import { cn } from '@/lib/utils'
import { getProjectStatus } from '@/util/functions/getStatus'
import { ChevronRight, Search, Truck } from 'lucide-react'
import { SkeletonOverview } from './SkeletonOverview'

interface ProjectsDashProps {
  projects: IProject[]
  onSelectProject?: (project: IProject) => void
  isLoading?: boolean
}

export const ProjectsSummary = ({ projects, isLoading }: ProjectsDashProps) => {
  const { isMoreThan } = useResponsive()
  console.log('projects: ', projects)

  if (isLoading) {
    return <SkeletonOverview />
  }

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-8',
        isMoreThan(1024) && 'grid-cols-3',
      )}
    >
      <Card className="col-span-1">
        <CardContent className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-semibold">Projects</h1>
            <TooltipSimple label="Create new project">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm"
                disabled
              >
                New
              </button>
            </TooltipSimple>
          </div>

          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Buscar projeto..."
              className="w-full p-3 pr-12 border rounded-lg bg-gray-50"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>

          <div className="space-y-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="p-4 border rounded-lg hover:border-blue-500 cursor-pointer transition-colors"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-medium">{project.name}</h3>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-600">
                      {project?.trucks?.length} trucks
                    </span>
                  </div>
                  <span className={'text-sm font-medium'}>
                    {getProjectStatus(project?.trucks)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* <div className="col-span-2">
        <Card>
          <CardContent className="p-6">
            {!projects.length ? (
              <div className="text-center py-12">
                <Package className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Nenhum projeto ainda
                </h2>
                <p className="text-gray-500">
                  Comece criando seu primeiro projeto de logística
                </p>
              </div>
            ) : (
              <div className="text-center py-12">
                <Truck className="w-16 h-16 mx-auto text-blue-500 mb-4" />
                <h2 className="text-xl font-semibold mb-2">
                  Selecione um projeto
                </h2>
                <p className="text-gray-500">
                  Escolha um projeto à esquerda para ver seus detalhes
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div> */}
    </div>
  )
}
