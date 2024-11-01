import { User } from '@prisma/client'
import { ChevronLeft, ChevronRight, RefreshCw } from 'lucide-react'

import { cn } from '@/lib/utils'
import { ESubscribeType } from '@/lib/types'
import { Hint } from '@/components/ui/hint'
import RecommendationItem from './item'

type Props = {
  data: User[]
  type: ESubscribeType 
}

const RecommendationList = ({ data, type }: Props) => {
  return (
    <div className={cn(
      'flex flex-col gap-y-4 px-4 py-3 rounded-xl',
      type === ESubscribeType.SIDEBAR
        ? 'border border-gray-300 dark:border-gray-700'
        : 'h-full'
    )}>
      {type === ESubscribeType.SIDEBAR && (
        <div className="flex justify-between items-center">
          <span className="font-semibold">STARS</span>

          <div className="flex items-center gap-x-2">
            <Hint side="top" label="Refresh">
              <RefreshCw className="size-4 cursor-pointer hover:text-sky-500" />
            </Hint>

            <Hint side="top" label="Prev">
              <ChevronLeft className="size-5 cursor-pointer hover:text-sky-500" />
            </Hint>

            <Hint side="top" label="Next">
              <ChevronRight className="size-5 cursor-pointer hover:text-sky-500" />
            </Hint>
          </div>
        </div>
      )}

      {(!data || !data.length) && (
        <div className="flex justify-center items-center h-full text-muted-foreground">No results</div>
      )}

      {!!data && data.length !== 0 && (
        <div className="flex flex-col gap-y-3">
          {data.map(item => (
            <RecommendationItem
              key={item.user_id}
              user={item}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default RecommendationList
