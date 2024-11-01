import Link from 'next/link'

import { links } from '@/lib/constants'

const Links = () => {
  return (
    <div className="space-x-3 w-full text-xs text-muted-foreground">
      {links.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className="cursor-pointer hover:underline"
        >
          {item.label}
        </Link>
      ))}

      <span>&copy; 2024 DexFans</span>
    </div>
  )
}

export default Links
