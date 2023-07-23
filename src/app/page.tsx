import { draftMode } from 'next/headers'
import { getClient } from '@/lib/sanity/client'
import { frontPageQuery } from '@/lib/queries'
import PreviewPageContent from '@/components/preview/PreviewPageContent'
import { genMetaObject } from '@/lib/helpers'

export async function generateMetadata() {
  const data = await getClient().fetch(frontPageQuery)
  return genMetaObject(data.seo)
}

export default async function Home() {
  const preview = draftMode().isEnabled
  const data = await getClient(preview).fetch(frontPageQuery)
  return <PreviewPageContent initData={data} query={frontPageQuery} preview={preview} />
}
