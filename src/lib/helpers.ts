import { Metadata } from 'next'
import { SanityDocument } from 'next-sanity'

export function genMetaObject(seoData: SanityDocument): Metadata {
  return {
    title: seoData?.title,
    description: seoData?.description,
  }
}
