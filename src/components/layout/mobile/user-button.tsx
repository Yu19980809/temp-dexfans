'use client'

// import AvatarItem from '@/components/common/avatar'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'

const UserButton = () => {
  const currentUser = {
    user_id: '20240925',
    username: 'Guangxin Yu',
    avatar: null
  }

  return (
    // <Sheet>
    //   <SheetTrigger asChild>
    //     <div>
    //       <AvatarItem user={currentUser} isMobile />
    //     </div>
    //   </SheetTrigger>

    //   <SheetContent>
    //     <SheetHeader>
    //       <SheetTitle>Edit profile</SheetTitle>
    //       <SheetDescription>
    //         Make changes to your profile here. Click save when you're done.
    //       </SheetDescription>
    //     </SheetHeader>
    //   </SheetContent>
    // </Sheet>

    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>

      <SheetContent side="left" className="bg-secondary">
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </SheetDescription>
        </SheetHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" /> */}
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            {/* <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" /> */}
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}

export default UserButton
