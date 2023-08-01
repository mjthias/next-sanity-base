import { PortableText } from '@portabletext/react'
import Anchor from '../Anchor'
import type { PortableTextBlock } from '@sanity/types'
import type { PortableTextMarkComponentProps } from '@portabletext/react'

type TextBlockData = {
  data: {
    _type: 'textBlock'
    _key: string
    text: PortableTextBlock
  }
}

export default function TextBlock({ data }: TextBlockData) {
  return (
    <div className='p-text'>
      <PortableText value={data.text} components={components} />
    </div>
  )
}

// Custom components config
const components = {
  marks: {
    internalLink: InternalLink,
    externalLink: ExternalLink,
  },
}

// Custom components design
function InternalLink(props: PortableTextMarkComponentProps) {
  return <Anchor href={`/${props?.value?.slug}`}>{props.text}</Anchor>
}

function ExternalLink(props: PortableTextMarkComponentProps) {
  const newTab = props?.value?.newTab
  return (
    <a target={newTab ? '_blank' : ''} href={resolveUrl(props?.value?.href)}>
      {props.children}
    </a>
  )
}

// Portable text helpers
function resolveUrl(url: string) {
  if (!url.startsWith('http') && !url.startsWith('tel') && !url.startsWith('mailto')) {
    return `https://${url}`
  }
  return url
}
