'use client'

import { useEffect, useState } from 'react'
import { redirect } from 'next/navigation'
import toast from 'react-hot-toast'

import useUser from '@/store/use-user'
import useActor from '@/store/use-actor'
import { ERROR_ACCOUNT_NOT_REGISTERED } from '@/lib/constants'
import EditProfileModal from '@/components/modals/edit-profile-modal'
import MobilePostButton from '@/components/layout/mobile/post-button'
import { useAuth } from '@/components/providers/auth'
import Actions from '@/components/layout/actions'
import Sidebar from '@/components/layout/sidebar'
import Loader from '@/components/common/loader'
import {
  canisterId as indexCanisterId,
  createActor as createIndexCanister
} from '@/declarations/index_canister'
import {
  canisterId as postCanisterId,
  createActor as createPostCanister
} from '@/declarations/post_canister'

type Props = {
  children: React.ReactNode
}

const RootLayout = ({ children }: Props) => {
  const { isAuth, identity,  setIsAuth } = useAuth()
  if (!isAuth) redirect('/login')

  const { indexCanister, setIndexCanister, setPostCanister } = useActor()
  const { setCurrentUser } = useUser()

  const [open, setOpen] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (!isAuth || !identity) return

    const indexCanister = createIndexCanister(indexCanisterId, {
      agentOptions: {
        identity
      }
    })
    const postCanister = createPostCanister(postCanisterId, {
      agentOptions: {
        identity
      }
    })

    setIndexCanister(indexCanister)
    setPostCanister(postCanister)
  }, [
    isAuth,
    identity,
    setIndexCanister,
    setPostCanister
  ])

  useEffect(() => {
    if (!indexCanister) return

    const fetchData = async () => {
      setIsLoading(true)
      const res = await indexCanister.api_get_my_profile()
      setIsLoading(false)

      if ('Ok' in res) {
        // Save user profile
        setCurrentUser(res.Ok)
      } else if (res.Err === ERROR_ACCOUNT_NOT_REGISTERED) {
        // Show profile modal to create account
        setOpen(true)
      } else {
        console.log('ERR_GET_MY_PROFILE', res.Err)
        toast.error('Something went wrong')
        setIsAuth(false)
        redirect('/login')
      }
    }

    fetchData()
  }, [indexCanister, setIsAuth, setCurrentUser])

  return (
    <div className="h-screen">
      <EditProfileModal open={open} type="create" setOpen={setOpen} />

      <div className="flex justify-center items-center h-full md:mx-auto">
        <Sidebar />
        <MobilePostButton />

        <main className="max-w-2xl w-full md:w-2/3 lg:w-1/2 h-full border-x border-gray-300 dark:border-gray-700">
          {isLoading ? <Loader /> : children}
        </main>

        <Actions />
      </div>
    </div>
  )
}

export default RootLayout

