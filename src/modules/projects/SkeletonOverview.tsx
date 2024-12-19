import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { ChevronRight, Search, Truck } from 'lucide-react'

export const SkeletonOverview = () => {
  return (
    <Card className="col-span-1">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-6">
          <Skeleton className="h-10 w-44 rounded-lg text-sm max-sm:w-[120px]" />
          <Skeleton className="h-10 w-32 rounded-lg text-sm max-sm:w-[90px]" />
        </div>

        <div className="relative mb-6">
          <Skeleton className="h-14 w-full p-3 pr-12 border rounded-lg" />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        <div className="space-y-4">
          <div className="p-4 border rounded-lg animate-pulse">
            <div className="flex justify-between items-start mb-3">
              <div>
                <Skeleton className="h-5 w-32 rounded-sm text-sm mb-1" />
                <Skeleton className="h-4 w-36 rounded-sm text-sm" />
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-500" />
                <Skeleton className="h-4 w-32 rounded-sm text-sm mb-1 max-sm:w-[60px]" />
              </div>
              <span className={'text-sm font-medium'}>
                <Skeleton className="h-4 w-32 rounded-sm text-sm mb-1 max-sm:w-[80px]" />
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
