import Link from 'next/link'
import Image from 'next/image'

// import AvatarItem from '@/components/common/avatar'
import cover from '../../../../../public/cover.png'

type Props = {
  user: any
}

const RecommendationItem = ({ user }: Props) => {
  return (
    <div className="relative flex justify-between items-center h-24 p-2">
      <Image
        src={user?.coverImage || cover}
        alt="Cover Image"
        className="absolute inset-0 w-full h-full rounded-xl object-cover -z-10 opacity-60"
      />

      <Link
        href={`/users/${user.user_id}`}
        className="flex items-center gap-x-2 cursor-pointer"
      >
        <div className="p-[1px] rounded-full shadow-md bg-sky-500">
          {/* <AvatarItem user={user}/> */}
        </div>

        <span className="max-w-[100px] font-semibold truncate">
          {user.username}
        </span>
      </Link>
    </div>
  )
}

export default RecommendationItem
