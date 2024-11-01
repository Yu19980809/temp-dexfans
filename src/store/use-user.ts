import { create } from 'zustand'

import { UserProfile } from '@/declarations/index_canister/index_canister.did'

type Props = {
  currentUser: UserProfile | null
  setCurrentUser: (data: UserProfile | null) => void
}

const useUser = create<Props>((set) => ({
  currentUser: null,
  setCurrentUser: data => set(() => ({ currentUser: data }))
}))

export default useUser
