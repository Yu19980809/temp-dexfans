// 'use client'

// import { useEffect, useState } from 'react'
// import { useRouter } from 'next/navigation'
// import { formatDistance } from 'date-fns'
// import { CirclePlay } from 'lucide-react'
// import toast from 'react-hot-toast'
// import {
//   AiFillHeart,
//   AiOutlineHeart,
//   AiOutlineMessage
// } from 'react-icons/ai'

// import { cn, formatName } from '@/lib/utils'
// import AvatarItem from './avatar'
// import { Post as TPost } from '@/declarations/post_canister/post_canister.did'
// import { UserProfile } from '@/declarations/index_canister/index_canister.did'
// import useActor from '@/store/use-actor'

// type Props = {
//   data: TPost
// }

// const Post = ({ data }: Props) => {
//   const { indexCanister } = useActor()

//   const [creator, setCreator] = useState<UserProfile>()

//   useEffect(() => {
//     if (!indexCanister) return

//     const fetchData = async () => {
//       const res = await index
//     }

//     fetchData()
//   }, [indexCanister])

//   return (
//     <div
//       onClick={() => {}}
//       className="p-4 border-b border-gray-300 dark:border-gray-700 cursor-pointer transition hover:bg-secondary/50"
//     >
//       <div className="flex gap-x-3">
//         <AvatarItem user={data?.creator} />

//         <div className="flex-1 flex flex-col gap-y-5">
//           <div className="flex justify-between items-center w-full">
//             <div className="flex items-center gap-x-2">
//               <p
//                 onClick={() => {}}
//                 className="font-semibold cursor-pointer hover:underline"
//               >
//                 {data.creator.username}
//               </p>

//               <span
//                 onClick={() => {}}
//                 className="hidden md:block text-sm text-muted-foreground cursor-pointer hover:underline"
//               >
//                 {formatName(data.creator.name)}
//               </span>
//             </div>

//             <span className="text-sm text-muted-foreground">
//               {/* {formatDistance(data.createdAt, new Date(), { addSuffix: true })} */}
//             </span>
//           </div>

//           <div className="flex flex-col gap-y-2">
//             <p>{data.content}</p>
            
//             <div>
//               {/* image */}
//               {/* video */}
//             </div>
//           </div>

//           <div className="flex items-center gap-10">
//             <div className="flex items-center gap-2 text-neutral-500 cursor-pointer transition hover:text-sky-500">
//               <AiOutlineMessage size={20} />

//               <p>
//                 {data.comments?.length || 0}
//               </p>
//             </div>

            
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Post
