import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

interface Anchor {
  href: string
  children: ReactNode
  className?: string
  onClick?: Function
}

export default function Anchor({ href, className, children, onClick }: Anchor): ReactNode {
  const router = useRouter()
  return (
    <a
      onClick={(event) => {
        event.preventDefault()
        router.push(href)
        {
          onClick && onClick()
        }
      }}
      href={href}
      className={className}
    >
      {children}
    </a>
  )
}
