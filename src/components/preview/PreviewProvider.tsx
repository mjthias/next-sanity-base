'use client'

import { getClient } from '@/lib/sanity/client'
import { LiveQueryProvider } from '@sanity/preview-kit'
import { useMemo } from 'react'

type PreviewProvider = {
  children: React.ReactNode
  preview: boolean
}

export default function PreviewProvider({ children, preview }: PreviewProvider) {
  const client = useMemo(() => getClient(preview), [preview])
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>
}
