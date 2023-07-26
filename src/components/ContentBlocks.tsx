import * as Blocks from './blocks'

export default function ContentBlocks({ blocks }: { blocks: Array<object> }) {
  return (
    <>
      {blocks.map((block: any, idx: Number) => {
        const Block = resolveBlocks(block)
        console.log(block)
        if (!Block) {
          return <div key={block._key}>Missing block: {upperFirst(block._type)}</div>
        }
        return <Block data={block} blockIdx={idx} key={block._key} />
      })}
    </>
  )
}

type BlockComponents = Record<string, React.FunctionComponent<any>>
function resolveBlocks(block: any) {
  const Block = (Blocks as BlockComponents)[upperFirst(block._type)]
  if (Block) return Block

  console.error('Cant find block', upperFirst(block._type))
  return null
}

function upperFirst(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
