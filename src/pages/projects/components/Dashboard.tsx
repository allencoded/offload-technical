import { Card, CardContent } from '@/components/ui/card'
import { IProject } from '@/data/types'
import { useResponsive } from '@/hooks/useResponsive'
import { useProjectStore } from '@/store/useProjectStore'
import { cn } from '@/util/lib/utils'
import debounce from 'lodash/debounce'
import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Outlet } from 'react-router'
import { ProjectCard } from './Cards'
import { SkeletonOverview } from './Skeleton'

interface ProjectsDashProps {
  onSelectProject?: (project: IProject) => void
  isLoading?: boolean
}

export const ProjectsDashboard = ({ isLoading }: ProjectsDashProps) => {
  const { isMoreThan } = useResponsive()
  const { projects } = useProjectStore()

  const [searchQuery, setSearchQuery] = useState('')
  const [searchValue, setSearchValue] = useState('')

  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        setSearchQuery(value)
      }, 300),
    [],
  )

  if (isLoading) {
    return <SkeletonOverview repeatCount={3} />
  }

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
    debouncedSearch(event.target.value)
  }

  const filteredProjects = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div
      className={cn(
        'grid grid-cols-1 gap-0 z-10 w-full',
        isMoreThan(1024) && 'w-[60%]',
      )}
    >
      <div className="relative m-6" hidden={isLoading}>
        <input
          type="text"
          placeholder="Search project..."
          className="w-full p-2 pr-12 pl-4 rounded-lg bg-gray-50 text-sm"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
      </div>

      <Card className="col-span-1">
        <CardContent className="p-6 pt-0">
          <div className="space-y-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </CardContent>
      </Card>
      <Outlet />
    </div>
  )
}
