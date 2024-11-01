'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import {
  FileVideo,
  ImageIcon,
  Smile,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import usePostButton from '@/store/use-post-button'
import Emoji from '@/components/common/emoji'
import PostButton from '@/components/main/post-button'
import { Textarea } from '@/components/ui/textarea'


type Props = {
  postId?: string
  isComment?: boolean
  placeholder?: string
  show?: boolean
}

const Editor = ({
  postId,
  placeholder = 'What is happening?!',
  isComment = false,
  show = false
}: Props) => {
  const router = useRouter()
  const { focus } = usePostButton()

  const textRef = useRef<HTMLTextAreaElement>(null)
  const [image, setImage] = useState<any>()
  const [video, setVideo] = useState<any>()
  const [value, setValue] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showControls, setShowControls] = useState<boolean>(false)
  
  useEffect(() => {
    if (!focus) return

    textRef?.current?.scrollIntoView()
    textRef?.current?.focus()
  }, [focus])

  const onPost = () => {
    // if (!currentUser || !currentUser.id || !value) return
    // setIsLoading(true)

    // createPost(currentUser.id, value, type, image?.publicId, video?.secureURL)
    //   .then(() => {
    //     setValue('')
    //     setImage(undefined)
    //     setVideo(undefined)
    //     toast.success('Post created')
    //     router.refresh()
    //   })
    //   .catch(() => toast.error('Something went wrong'))
    //   .finally(() => setIsLoading(false))
  }

  const onComment = () => {
    // if (!value) return toast.error('Content is required')
    // setIsLoading(true)

    // createComment(postId!, currentUser?.id!, value)
    //   .then(res => {
    //     if (res?.error) return toast.error(res.error)
    //     toast.success('Comment created')
    //     setValue('')
    //     router.refresh()
    //   })
    //   .catch(() => toast.error('Something went wrong'))
    //   .finally(() => setIsLoading(false))
  }

  return (
    <div className={cn(
      'hidden md:flex flex-col w-full h-32 px-4 py-3',
      show ? 'flex h-[200px]' : 'border-b border-gray-300 dark:border-gray-700'
    )}>
      <Textarea
        ref={textRef}
        onChange={(e: any) => setValue(e.target.value)}
        value={value}
        disabled={isLoading}
        placeholder={placeholder}
        className="flex-1 border-none text-lg resize-none overflow-y-auto focus-visible:ring-0 focus-visible:ring-offset-0"
      />

      <div className="relative bottom-4 flex justify-between items-center">
        <div className="flex items-center gap-x-4 px-4">
          <ImageIcon className="w-5 h-5 text-sky-500 cursor-pointer transition hover:scale-110" />

          <FileVideo className="w-5 h-5 text-sky-500 cursor-pointer hover:scale-110" />

          <Emoji onChange={emoji => setValue(prev => prev + emoji)}>
            <Smile className="w-5 h-5 text-sky-500 cursor-pointer hover:scale-110" />
          </Emoji>
        </div>

        <PostButton
          isEmpty={!value}
          isLoading={isLoading}
          onSubmit={onPost}
        />
      </div>
    </div>
  )
}

export default Editor

