import { draftMode } from 'next/headers'
import PreviewPageContent from '@/components/preview/PreviewPageContent'
import { pageQuery } from '@/lib/queries'
import { getClient } from '@/lib/sanity/client'

// Prepare Next.js to know which routes already exist
// export async function generateStaticParams() {
//   const posts = await cachedClient(postPathsQuery);

//   return posts;
// }

export default async function Page({ params }: { params: any }) {
  const preview = draftMode().isEnabled
  const data = await getClient(preview).fetch(pageQuery, params)
  return <PreviewPageContent initData={data} preview={preview} query={pageQuery} params={params} />
}
