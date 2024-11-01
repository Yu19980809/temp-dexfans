import { create } from 'zustand'

import { index_canister } from '@/declarations/index_canister'
import { post_canister } from '@/declarations/post_canister'

type IndexCanister = typeof index_canister
type PostCanister = typeof post_canister

type Props = {
  indexCanister: IndexCanister | null,
  postCanister: PostCanister | null,
  setIndexCanister: (data: IndexCanister | null) => void,
  setPostCanister: (data: PostCanister | null) => void
}

const useActor = create<Props>((set) => ({
  indexCanister: null,
  postCanister: null,
  setIndexCanister: data => set((state) => ({ ...state, indexCanister: data })),
  setPostCanister: data => set((state) => ({ ...state, postCanister: data }))
}))

export default useActor
