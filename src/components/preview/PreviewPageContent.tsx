import PreviewData from './PreviewData'
import PreviewProvider from './PreviewProvider'
import { QueryParams, SanityDocument } from 'next-sanity'
import PageContent from '../PageContent'
import ExitPreview from './ExitPreview'

interface PreviewPageProps {
  initData: SanityDocument
  preview: boolean
  query: string
  params?: QueryParams
}

export default function PreviewPageContent(props: PreviewPageProps) {
  const { initData, preview = false, query = null, params = {} } = props
  if (!preview || !query) return <PageContent data={initData} />

  return (
    <PreviewProvider preview={preview}>
      <ExitPreview />
      <PreviewData initData={props.initData} query={query} params={params} />
    </PreviewProvider>
  )
}
