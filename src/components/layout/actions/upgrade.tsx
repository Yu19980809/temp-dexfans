'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'

const Upgrade = () => {
  const router = useRouter()

  return (
    <div className="space-y-2 px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700">
      <p className="font-semibold text-xl">Upgrade to Premium</p>
      <p className="text-sm">Upgrade to unlock new features and if eligible, receive a share of ads revenue.</p>
      
      <Button
        onClick = {() => router.push('/premium')}
        className="rounded-full bg-sky-500 font-semibold text-white cursor-pointer transition hover:bg-sky-500 hover:opacity-80"
      >
        Upgrade
      </Button>
    </div>
  )
}

export default Upgrade
