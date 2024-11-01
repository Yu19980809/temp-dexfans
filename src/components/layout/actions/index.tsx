import { User } from '@prisma/client'

import Links from './links'
import Upgrade from './upgrade'
import SearchBar from './search'
// import RecommendationList from './recommendation'
import { ESubscribeType } from '@/lib/types'

const Actions = () => {
  const users: User[] = [
    {
      user_id: '001',
      username: 'Libra',
      avatar: null
    },
    {
      user_id: '002',
      username: 'Guangxin',
      avatar: null
    },
    {
      user_id: '003',
      username: 'Bobbi',
      avatar: null
    }
  ]

  return (
    <aside className="hidden lg:flex flex-col gap-y-4 max-w-[350px] lg:w-1/4 h-full md:pl-4 lg:pl-6 xl:pl-8 py-4">
      <SearchBar />
      <Upgrade />
      {/* {!!trends && trends.length !== 0 && <Trend data={trends} />} */}
      {/* {!!users && users.length !== 0 && <RecommendationList type={ESubscribeType.SIDEBAR} data={users} />} */}
      <Links />
    </aside>
  )
}

export default Actions
