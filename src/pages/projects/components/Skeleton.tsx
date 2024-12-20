import { Skeleton } from '@/components/ui/skeleton'
import { Truck } from 'lucide-react'

interface SkeletonOverviewProps {
  repeatCount: number
}

export const SkeletonOverview = ({
  repeatCount = 1,
}: SkeletonOverviewProps) => {
  const skeletonArray = Array.from({ length: repeatCount }, (_, index) => index)

  return (
    <div className="space-y-4 mt-[4.5rem] w-[85%]">
      {skeletonArray.map((index) => (
        <div
          key={index}
          className="rounded-2xl shadow-lg transition-colors bg-white p-4"
        >
          <div className="flex justify-between items-start mb-3">
            <Skeleton className="h-5 w-28 rounded-sm text-sm mb-1" />
            <Skeleton className="h-4 w-36 rounded-sm text-sm" />
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
      ))}
    </div>
  )
}
