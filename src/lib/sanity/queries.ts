import { groq } from 'next-sanity'

const contentBlocks = groq`
  contentBlocks[]{
    ...,

    // Hero
    _type == 'hero' => {
      ...,
      image {
        ...,
        asset->,
      },
    },

    // Text Block
    _type == 'textBlock' => {
      text[] {
        ...,
        markDefs[] {
          ...,
          _type == 'internalLink' => {
            'slug': @->slug.current,
          }
        }
      },
    },

  }
`

export const pageSlugsQuery = groq`
  *[_type == "page"][] {
    'slug': slug.current,
  }
`

export const pageQuery = groq`
  *[_type == "page" && slug.current == $slug][0] {
    ...,
    ${contentBlocks}
  }
`

export const frontPageQuery = groq`
  *[_type == "frontpage"][0] {
    ...,
  }
`
