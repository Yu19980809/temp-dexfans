import { canisterId, createActor } from '@/declarations/index_canister'
import { UserInputArgs } from '@/declarations/index_canister/index_canister.did'

const initActor = (identity: any) => {
  const actor = createActor(canisterId, {
    agentOptions: {
      identity
    }
  })

  return actor
}

export const createAccount = async (identity: any, params: UserInputArgs) => {
  if (!identity) return { success: false, error: 'Unauthorized' }

  try {
    const actor = initActor(identity)
    const res = await actor.api_create_account(params)

    return { success: true, data: res }
  } catch (error) {
    return { success: false, error }
  }
}

export const updateProfile = async (identity: any, params: UserInputArgs) => {
  if (!identity) return { success: false, error: 'Unauthorized' }

  try {
    const actor = initActor(identity)
    const res = await actor.api_update_profile(params)

    return { success: true, data: res }
  } catch (error) {
    return { success: false, error }
  }
}
