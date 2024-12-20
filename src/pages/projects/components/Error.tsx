import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

export const ErrorEndpoint = ({ error }: { error: Error }) => {
  return (
    <Card className="col-span-1">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-10 w-44 rounded-lg text-sm max-sm:w-[120px]" />
          <Skeleton className="h-10 w-32 rounded-lg text-sm max-sm:w-[90px]" />
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg">
            <div className="flex flex-col justify-between items-center">
              <h3 className="font-medium">{error.message}</h3>
              <span className="font-light text-xs">
                Verify json-server is started
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
