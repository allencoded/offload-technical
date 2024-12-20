import { Card, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { ArrowLeft } from 'lucide-react'
import { useParams } from 'react-router-dom'

export const ProjectDetail = () => {
  const { projectId } = useParams()
  console.log('projectId: ', projectId)

  const { data } = useQuery({
    queryKey: ['projects'],
    queryFn: async () => {
      const response = await axios.get('http://localhost:3000/projects')
      return response.data
    },
  })
  console.log('data: ', data)

  return (
    <div className="grid grid-cols-3 gap-8">
      <Card className="col-span-1">
        <CardContent className="p-6">
          <button className="flex items-center gap-2 text-gray-600 mb-6">
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar para projetos</span>
          </button>

          <div className="space-y-4">
            <div className="p-4 border rounded-lg border-blue-500 bg-blue-50">
              <h2 className="font-medium">name</h2>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="col-span-2">
        <CardContent className="p-6">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl font-semibold">Name</h2>
              </div>
              <div className={`px-4 py-2 rounded-full text-white `}>
                calculateProjectStatus(project.trucks)
              </div>
            </div>

            <div className="space-y-4">
              {/* {trucks.map((truck: ITruck) => (
                <div
                  key={truck.id}
                  className="flex items-center justify-between p-4 border rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-full ${
                        truck.status === TRUCK_STATUS.DELAYED
                          ? 'bg-delayed'
                          : truck.status === TRUCK_STATUS.ARRIVED_ON_TIME
                          ? 'bg-completed-on-time'
                          : 'bg-in-process'
                      }`}
                    >
                      <Truck
                        className={`w-5 h-5 ${
                          truck.status === TRUCK_STATUS.DELAYED
                            ? 'bg-delayed'
                            : truck.status === TRUCK_STATUS.ARRIVED_ON_TIME
                            ? 'bg-completed-on-time'
                            : 'bg-in-process'
                        }`}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{truck.id}</p>
                      <p className="text-sm text-gray-500">{truck.status}</p>
                    </div>
                  </div>

                  <select
                    value={truck.status}
                    className="p-2 border rounded-lg bg-gray-50"
                  >
                    {Object.values(TRUCK_STATUS).map((status) => (
                      <option key={status} value={status}>
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
              ))} */}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
