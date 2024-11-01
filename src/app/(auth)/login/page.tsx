'use client'

import { useRouter } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/components/providers/auth'

const LoginPage = () => {
  const router = useRouter()
  const { isAuth, identity, login } = useAuth()

  if (isAuth && identity) router.push('/')

  return (
    <Button onClick={() => login()}>
      Login
    </Button>
  )
}

export default LoginPage
