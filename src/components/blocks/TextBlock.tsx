import { PortableText } from '@portabletext/react'
import Anchor from '../Anchor'
import { SanityDocument } from 'next-sanity'

export default function TextBlock({ data }: SanityDocument) {
  return (
    <div className='p-text'>
      <PortableText value={data.text} components={components} />
    </div>
  )
}

// Custom components config
const components = {
  marks: {
    internalLink: internalLink,
    externalLink: externalLink,
  },
}

// Custom components design

function internalLink(value: any) {
  return <Anchor href={`/${value.value.slug}`}>{value.text}</Anchor>
}

function externalLink(value: any) {
  const newTab = value.value.newTab
  return (
    <a target={newTab ? '_blank' : ''} href={resolveUrl(value.value.href)}>
      {value.text}
    </a>
  )
  function resolveUrl(url: any) {
    if (!url.startsWith('http') || !url.startsWith('tel') || !url.startsWith('mailto'))
      return `https://${url}`
    else return url
  }
}
