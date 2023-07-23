import { ReactNode } from 'react'
import * as Blocks from './blocks'
import { SanityDocument } from 'next-sanity'

export default function ContentBlocks({ blocks }: any): ReactNode {
  return (
    <>
      {blocks.map((block: SanityDocument, idx: Number): ReactNode => {
        const Block = resolveBlocks(block)
        if (!Block) {
          return <div key={block._key}>Missing block: {upperFirst(block._type)}</div>
        }
        return <Block data={block} blockIdx={idx} key={block._key} />
      })}
    </>
  )
}

type BlockComponents = Record<string, React.FunctionComponent<any>>
type BlockComponent = React.FunctionComponent<any> | null

function resolveBlocks(block: SanityDocument): BlockComponent {
  const Block = (Blocks as BlockComponents)[upperFirst(block._type)]
  if (Block) return Block

  console.error('Cant find block', upperFirst(block._type))
  return null
}

function upperFirst(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
