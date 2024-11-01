'use client'

import { EPostListType } from '@/lib/types'
import useTabType from '@/store/use-tab-type'
import Editor from '@/components/main/editor'
// import PostList from '@/components/main/post-list'
import HeaderTab from '@/components/main/header-tab'
import Topbar from '@/components/layout/mobile/topbar'

const Home = () => {
  const { isSubscribing } = useTabType()
  const type = isSubscribing ? EPostListType.SUBSCRIBING : EPostListType.FOR_YOU

  return (
    <div className="relative flex flex-col h-full pb-16 md:pb-0">
      <Topbar />
      <HeaderTab />

      <div className="flex-1 overflow-y-auto">
        <Editor />
        {/* <PostList type={type} /> */}
      </div>
    </div>
  )
}

export default Home
