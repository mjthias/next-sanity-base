import { createClient } from 'next-sanity'
import { SanityClient } from 'next-sanity'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2023-07-14'
export const previewToken =
  process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN ?? '1ee7bc5c-32df-4873-b698-a89db92a9e66 lol'

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
