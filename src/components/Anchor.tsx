'use client'

import { useRouter } from 'next/navigation'
import React, { ReactNode } from 'react'

type Anchor = {
  href: string
  children: ReactNode
  className?: string
  onClick?: Function
}

export default function Anchor({ href, className, children, onClick }: Anchor) {
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
