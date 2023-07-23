import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url) // Get params

  // Validate .env preview token
  const token = searchParams.get('token')
  if (!token || token !== process.env.NEXT_PUBLIC_SANITY_PREVIEW_TOKEN) {
    return redirect('/api/exit-preview')
  }

  // Get redir path
  const redirPath = searchParams.get('redirect') ?? '/'

  draftMode().enable()
  return redirect(redirPath)
}
