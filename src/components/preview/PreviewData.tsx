'use client'

import { useLiveQuery } from '@sanity/preview-kit'
import PageContent from '../PageContent'
import { QueryParams, SanityDocument } from 'next-sanity'

type PreviewDataProps = {
  initData: SanityDocument
  query: string
  params?: QueryParams
}

export default function PreviewData({ initData, query, params }: PreviewDataProps) {
  const [data] = useLiveQuery(initData, query, params ?? undefined)
  if (!data) return <p>404 - No preview data</p>
  return <PageContent data={data} />
}
