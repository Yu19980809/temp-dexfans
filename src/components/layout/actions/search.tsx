'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Input } from '@/components/ui/input'

const SearchBar = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false)

  return (
    <div className="relative w-full">
      <Input
        type="text"
        placeholder="Search"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        className={cn(
          'pl-10 w-full rounded-full bg-secondary/60 outline-none focus-visible:ring-0 focus-visible:ring-offset-0',
          isFocus && 'border-sky-500'
        )}
      />

      <Search className={cn(
        'absolute top-3 left-4 w-4 h-4 text-muted-foreground',
        isFocus && 'text-sky-500'
      )} />
    </div>
  )
}

export default SearchBar
