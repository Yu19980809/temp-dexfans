// import { createReactor } from '@ic-reactor/react'

// import { canisterId, idlFactory, index_canister } from '@/declarations/index_canister'
// import { useAuth as useAuthClient } from '@/components/providers/auth'

// type Actor = typeof index_canister

// const useIndexCanister = () => {
//   const { isAuth, identity } = useAuthClient()

//   const { useActorStore, useAuth, useQueryCall, useUpdateCall } = createReactor<Actor>({
//     canisterId,
//     idlFactory,
//     identity: isAuth ? identity! : undefined,
//     host: "http://localhost:4943",
//   })

//   return {
//     useActorStore,
//     useAuth,
//     useQueryCall,
//     useUpdateCall
//   }
// }

// export default useIndexCanister