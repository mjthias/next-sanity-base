import { draftMode } from 'next/headers'
import PreviewPageContent from '@/components/preview/PreviewPageContent'
import { pageQuery, pagesPathQuery } from '@/lib/queries'
import { getClient } from '@/lib/sanity/client'
import { genMetaObject } from '@/lib/helpers'

type Props = {
  params: { slug: string }
}

export async function generateStaticParams() {
  const pages = await getClient().fetch(pagesPathQuery)
  return pages
}

export async function generateMetadata({ params }: Props) {
  const data = await getClient().fetch(pageQuery, params)
  return genMetaObject(data.seo)
}

export default async function Page({ params }: Props) {
  const preview = draftMode().isEnabled
  const data = await getClient(preview).fetch(pageQuery, params)
  return <PreviewPageContent initData={data} preview={preview} query={pageQuery} params={params} />
}
