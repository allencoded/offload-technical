import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'cursor-default inline-flex text-neutral-50 items-center text-[.8rem] font-medium rounded-md px-4 py-2 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 dark:border-neutral-800 dark:focus:ring-neutral-300 border-transparent',
  {
    variants: {
      variant: {
        unplanned:
          'bg-unplanned-light text-process font-medium hover:bg-unplanned-light/80',
        delayed: 'bg-delayed  hover:bg-delayed/80 font-bold',
        process: 'bg-process  hover:bg-process/80',
        completed: 'bg-completed  hover:bg-completed/80',
      },
    },
    defaultVariants: {
      variant: 'unplanned',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
