import { Card, CardContent } from '@/components/ui/card'
import { ITruck, TRUCK_STATUS } from '@/data/types'
import { useProjectStore } from '@/store/useProjectStore'
import { sortProjects } from '@/util/functions/sortProjects'
import { cn } from '@/util/lib/utils'
import { ArrowLeft, Truck } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router'

export const ProjectDetail = () => {
  const { projectId } = useParams()
  const { projects: sortedProjects, setProjects } = useProjectStore()

  const project = sortedProjects?.find((project) => {
    return projectId && project?.id === String(projectId)
  })

  const [trucks, setTrucks] = useState(project?.trucks || [])
  const isUpdating = useRef(false)

  const handleTruckStatusChange = (
    truckId: number,
    newStatus: TRUCK_STATUS,
  ) => {
    isUpdating.current = true

    setTrucks((prevTrucks) =>
      prevTrucks.map((truck) =>
        truck.id === truckId ? { ...truck, status: newStatus } : truck,
      ),
    )
  }

  useEffect(() => {
    if (project) {
      const updatedProject = { ...project, trucks }
      const updatedProjects = sortedProjects.map((p) =>
        p.id === updatedProject.id ? updatedProject : p,
      )
      setProjects(sortProjects(updatedProjects))

      if (isUpdating.current === true) {
        localStorage.setItem('projects', JSON.stringify(updatedProjects))
      }
    }
  }, [trucks]) //eslint-disable-line

  return (
    <>
      <div className="grid grid-cols-1 gap-0 z-10 relative">
        <Card className="col-span-1">
          <CardContent className="flex flex-row p-6 w-full justify-between">
            <button
              className="flex items-center gap-2 text-white"
              title="Back to projects"
            >
              <Link to="/">
                <ArrowLeft className="w-7 h-auto" />
              </Link>
            </button>

            <div className="space-y-4">
              <h2 className="font-bold text-[2rem] text-white">
                {project?.name}
              </h2>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-2">
          <CardContent className="p-6">
            <div className="mb-10">
              <div className="space-y-4">
                {project &&
                  project.trucks.map((truck: ITruck) => (
                    <div
                      key={truck.id}
                      className="flex items-center justify-between py-7 px-4 border rounded-2xl shadow-xl bg-white"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={cn(
                            'p-2 rounded-full bg-process',
                            truck.status === TRUCK_STATUS.DELAYED &&
                              'bg-delayed',
                            truck.status === TRUCK_STATUS.UNSCHEDULED &&
                              'bg-unplanned-light',
                            truck.status === TRUCK_STATUS.ARRIVED_ON_TIME &&
                              'bg-completed',
                          )}
                        >
                          <Truck
                            className={`w-5 h-5 ${
                              truck.status === TRUCK_STATUS.UNSCHEDULED
                                ? 'text-process'
                                : 'text-white'
                            }`}
                          />
                        </div>
                        <div>
                          <p className="font-medium">{truck.driver}</p>
                          <p className="text-sm text-gray-500">
                            {truck.status}
                          </p>
                        </div>
                      </div>

                      <select
                        value={truck.status.toLowerCase().replace(/_/g, '-')}
                        onChange={(e) =>
                          handleTruckStatusChange(
                            truck.id,
                            e.target.value
                              .toLowerCase()
                              .replace(/_/g, '-') as TRUCK_STATUS,
                          )
                        }
                        className="p-2 border rounded-lg bg-gray-50"
                      >
                        {Object.entries(TRUCK_STATUS).map(([key, value]) => (
                          <option key={key} value={value}>
                            {value.replace(/[-_]/g, ' ')}{' '}
                          </option>
                        ))}
                      </select>
                    </div>
                  ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="bg-primary w-full h-[13rem] absolute top-0 left-0 rounded-b-3xl z-0" />
    </>
  )
}
