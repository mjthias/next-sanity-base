import { SanityDocument } from 'next-sanity'
import ContentBlocks from './ContentBlocks'

export default function PageContent({ data }: { data: SanityDocument }) {
  // SHARED PAGE CONTENT LOGIC
  return (
    <main>
      <h1>{data?.title}</h1>
      {data?.contentBlocks && <ContentBlocks blocks={data.contentBlocks} />}
    </main>
  )

  // PAGE SPCIFIC CONTENT LOGIC
  switch (data._type) {
    case 'page':
      return (
        // || Import
        <main>
          <h1>{data.title}</h1>
        </main>
      )
    case 'frontpage':
      return (
        // || Import
        <main>
          <h1>Hello from Front page</h1>
        </main>
      )
    default:
      return // Default layout
  }
}
