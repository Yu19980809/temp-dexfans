import Logo from '../sidebar/logo'
import UserButton from './user-button'
import { ModeToggle } from '@/components/common/mode-toggle'

const Topbar = () => {
  return (
    <div className="md:hidden flex justify-between items-center w-full h-16 px-4 border-b">
      <UserButton />
      <Logo />
      <ModeToggle />
    </div>
  )
}

export default Topbar
