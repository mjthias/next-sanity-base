'use client'

import Image from 'next/image'
import { useNextSanityImage } from 'next-sanity-image'
import { getClient } from '@/lib/sanity/client'
import type { ImageAsset } from '@sanity/types'

type SanityImage = {
  imageObj: {
    alt: string
    asset: ImageAsset
    [key: string]: any
  }
  heightRatio: number
  width: number
  sizes: string
  [key: string]: any
}

export default function SanityImage({ imageObj, heightRatio, width, ...rest }: SanityImage) {
  const config = (imageUrlBuilder: any, options: any) => {
    return imageUrlBuilder
      .width(options.width)
      .height(Math.round(options.width * heightRatio))
      .fit('crop')
      .quality(75)
  }
  const imageProps = useNextSanityImage(getClient(), imageObj, { imageBuilder: config })

  return (
    <Image
      {...imageProps}
      {...rest}
      width={width}
      height={Math.round(width * heightRatio)}
      alt={imageObj?.alt}
      placeholder={imageObj?.asset?.metadata?.lqip ? 'blur' : undefined}
      blurDataURL={imageObj?.asset?.metadata?.lqip ?? undefined}
    />
  )
}
