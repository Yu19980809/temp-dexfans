// 'use cient'

// import { useEffect, useState } from 'react'
// import { useInView } from 'react-intersection-observer'

// import { Post as TPost } from '@/declarations/post_canister/post_canister.did'
// import { EPostListType } from '@/lib/types'
// import { AMOUNT_PER_PAGE } from '@/lib/constants'
// import Loader from '@/components/common/loader'
// import Post from '@/components/common/post'
// import useActor from '@/store/use-actor'
// import toast from 'react-hot-toast'

// type Props = {
//   type: EPostListType
// }

// const PostList = ({ type }: Props) => {
//   const { ref, inView } = useInView()
//   const { postCanister } = useActor()
//   // const data: TPost[] = [{"user_id":"667c408b6776f98c17ac6368","content":"Bloom where you are planted and embrace the divine. ðŸŒ¼","likedIds":["667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","667c2f20257093d204267457","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/bztuvhysyksymhe0g5io","video":null,"type":"FREE","creatorId":"667c3e0d01849114e2ee7b81","createdAt":"$D2024-06-26T16:23:37.499Z","updatedAt":"$D2024-07-01T02:57:59.822Z","comments":[],"creator":{"user_id":"667c3e0d01849114e2ee7b81","name":"Daisy","username":"DivineDaisy","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719418870/dexfans/ictqahsb5wrehcjzzjs3.png"}},{"user_id":"667c3a1a6776f98c17ac6367","content":"Find bliss in the little moments. Letâ€™s enjoy them together. ðŸŒ¸","likedIds":["667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","667c2f20257093d204267457","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e","664f0528388c665dfa0f9639"],"image":"dexfans/ghzkhcx34ek8vabcigsq","video":null,"type":"FREE","creatorId":"667c37d0bddc84f179ffa77b","createdAt":"$D2024-06-26T15:56:08.955Z","updatedAt":"$D2024-09-30T05:45:08.766Z","comments":[],"creator":{"user_id":"667c37d0bddc84f179ffa77b","name":"Bella","username":"BlissfulBella","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719416929/dexfans/c9upf6wedyyfvzn4hscp.webp"}},{"user_id":"667c35e76776f98c17ac6366","content":"Step into my world and let the magic begin. Hypnotized yet? âœ¨","likedIds":["667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","667c2f20257093d204267457","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/tcr44oh4kcsuztcvphg5","video":null,"type":"FREE","creatorId":"667c3314998483efde277467","createdAt":"$D2024-06-26T15:38:13.325Z","updatedAt":"$D2024-07-01T02:58:03.548Z","comments":[],"creator":{"user_id":"667c3314998483efde277467","name":"Hailey","username":"HypnoticHailey","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719415749/dexfans/jdd9avbdoh7hlvaz7qk9.webp"}},{"user_id":"667c3239d58c147133f76ae2","content":"Exotic adventures and enchanting stories await. Letâ€™s explore! ðŸŒº","likedIds":["667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/fs8gjzuzcqghemrhqir2","video":null,"type":"FREE","creatorId":"667c2f20257093d204267457","createdAt":"$D2024-06-26T15:22:31.733Z","updatedAt":"$D2024-07-01T02:58:05.225Z","comments":[],"creator":{"user_id":"667c2f20257093d204267457","name":"Elena","username":"ExoticElena","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719414777/dexfans/yqe58duxn7ynwohgtekb.webp"}},{"user_id":"667c2e579d2bc97a973eb1a3","content":"Letâ€™s make today sensational and unforgettable. Join the fun! ðŸŽ‰","likedIds":["667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/hogirnzqfqikmctrcorp","video":null,"type":"FREE","creatorId":"667c2b2ced149c2c7bfb53d1","createdAt":"$D2024-06-26T15:05:58.047Z","updatedAt":"$D2024-07-01T02:58:10.955Z","comments":[],"creator":{"user_id":"667c2b2ced149c2c7bfb53d1","name":"Sophie","username":"SensationalSophie","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719413850/dexfans/fdbhlbklbkmnjgvu1def.webp"}},{"user_id":"667c2a0de5231b0c017afff6","content":"Hey Bobbi, are you little shy shy?","likedIds":["667ba5812d7623d9c625652c","667c2b2ced149c2c7bfb53d1","667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":null,"video":null,"type":"FREE","creatorId":"667ae67f1c909d3dabc784a3","createdAt":"$D2024-06-26T14:47:39.956Z","updatedAt":"$D2024-07-01T02:58:13.011Z","comments":[],"creator":{"user_id":"667ae67f1c909d3dabc784a3","name":"CaptivatingCassie","username":"CaptivatingCassie","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719330525/dexfans/dzczh3kmcnujqd8r31dn.heic"}},{"user_id":"667c2710c188e4c9029b08a4","content":"Temptation never looked so good. Ready to take the plunge? ðŸ”¥","likedIds":["667ba5812d7623d9c625652c","667c2b2ced149c2c7bfb53d1","667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66821acb6414666c0226da2e"],"image":"dexfans/ovykdbpc7sjhtjsuazpe","video":null,"type":"FREE","creatorId":"667ba5812d7623d9c625652c","createdAt":"$D2024-06-26T14:34:54.467Z","updatedAt":"$D2024-07-01T02:58:14.632Z","comments":[],"creator":{"user_id":"667ba5812d7623d9c625652c","name":"Tara","username":"TemptingTara","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719412204/dexfans/a25inef1cw5zeml908to.webp"}},{"user_id":"667c2387f12f763b14843e1d","content":"Bathe in the moonlight and let your soul glow. ðŸŒ™","likedIds":["667b1729f8c52e2a4e4d6886","667ba5812d7623d9c625652c","667c2b2ced149c2c7bfb53d1","667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/ph2do6opwjqmtseurjtw","video":null,"type":"FREE","creatorId":"667b1729f8c52e2a4e4d6886","createdAt":"$D2024-06-26T14:19:49.251Z","updatedAt":"$D2024-07-01T02:58:18.395Z","comments":[],"creator":{"user_id":"667b1729f8c52e2a4e4d6886","name":"Luna","username":"LusciousLuna","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719410511/dexfans/dbvj4yy5t0zvms5xxidq.webp"}},{"user_id":"667b152ca756a4a38dcbdc49","content":"Angel by day, mischievous by night. Letâ€™s create magic together. ðŸ˜‡","likedIds":["667b13dffa2f620c95f479f0","667b15fbf8c52e2a4e4d6884","667b1729f8c52e2a4e4d6886","667b1729f8c52e2a4e4d6886","667ba5812d7623d9c625652c","667c2b2ced149c2c7bfb53d1","667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c3e0d01849114e2ee7b81","667c3e0d01849114e2ee7b81","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/kxvifp8dorqoumaqq8at","video":null,"type":"FREE","creatorId":"667b13dffa2f620c95f479f0","createdAt":"$D2024-06-25T19:06:18.285Z","updatedAt":"$D2024-07-01T02:58:20.498Z","comments":[],"creator":{"user_id":"667b13dffa2f620c95f479f0","name":"AlluringAngel","username":"AlluringAngel","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719342322/dexfans/l61p1n29mx0cm9inc4ax.webp"}},{"user_id":"667b132b4fecb0154d2deaa3","content":"Enchantment awaits at every turn. Ready to be spellbound? âœ¨","likedIds":["667b111d872603448e65f342","667b13dffa2f620c95f479f0","667b15fbf8c52e2a4e4d6884","667b1729f8c52e2a4e4d6886","667b1729f8c52e2a4e4d6886","667ba5812d7623d9c625652c","667c2b2ced149c2c7bfb53d1","667c2b2ced149c2c7bfb53d1","667c2f20257093d204267457","667c2f20257093d204267457","667c3314998483efde277467","667c37d0bddc84f179ffa77b","667c37d0bddc84f179ffa77b","667c42ef8bb2dd58288a2366","66818ddd52b1ad2007266e8a","66821acb6414666c0226da2e"],"image":"dexfans/lxnhfjznvkyspkqyj1qn","video":null,"type":"FREE","creatorId":"667b111d872603448e65f342","createdAt":"$D2024-06-25T18:57:45.981Z","updatedAt":"$D2024-07-01T02:58:22.726Z","comments":[],"creator":{"user_id":"667b111d872603448e65f342","name":"EnchantingEve","username":"EnchantingEve","avatar":"https://res.cloudinary.com/droevdqjs/image/upload/v1719341793/dexfans/tslqaonyqzm2dvn7kbar.png"}}]
  
//   const [offset, setOffset] = useState<number>(AMOUNT_PER_PAGE)
//   const [posts, setPosts] = useState<TPost[]>([])
//   const [isOver, setIsOver] = useState<boolean>(false)
//   const [isError, setIsError] = useState<boolean>(false)
//   const [isLoading, setIsLoading] = useState<boolean>(false)

//   useEffect(() => {
//     if (!postCanister) return

//     const fetchData = async () => {
//       try {
//         const res = await postCanister.latest_posts(BigInt(AMOUNT_PER_PAGE))
//         setPosts(res)
//       } catch (error) {
//         console.log('ERR_FETCH_LATEST_POSTS', error)
//         toast.error('Something went wrong')
//         setIsError(true)
//       }
//     }

//     fetchData()
//   }, [postCanister])

//   return (
//     <>
//       {isLoading && (
//         <div className="flex justify-center items-center h-full">
//           <Loader className="w-8 h-8" />
//         </div>
//       )}

//       {!isLoading && isError && (
//         <div className="flex justify-center items-center h-full">
//           <span className="text-muted-foreground">Something went wrong</span>
//         </div>
//       )}

//       {(!posts || posts.length === 0) && !isLoading && (
//         <div className="flex justify-center items-center h-full">
//           <span className="text-muted-foreground">No posts</span>
//         </div>
//       )}

//       {!!posts && posts.length !== 0 && !isLoading && !isError && (
//         <div className="h-full">
//           {posts.map((item, index) => <Post key={index} data={item} />)}

//           <div ref={ref} className="flex justify-center items-center text-muted-foreground py-2">
//             {isOver ? 'No more posts' : <Loader className="w-4 h-4" />}
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default PostList
