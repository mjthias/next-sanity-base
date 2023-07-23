import { createClient } from 'next-sanity'
import { SanityClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION

export function getClient(preview?: boolean): SanityClient {
  const client: SanityClient = createClient({
    projectId,
    dataset,
    apiVersion,
    perspective: 'published',
    useCdn: false,
  })
  if (preview) {
    return client.withConfig({
      useCdn: false,
      perspective: 'previewDrafts',
    })
  }

  return client
}
