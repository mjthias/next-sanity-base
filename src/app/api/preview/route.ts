import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { previewToken } from '@/lib/sanity/client'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url) // Get params

  // Validate .env preview token
  const token = searchParams.get('token')
  if (!token || token !== previewToken) {
    return redirect('/api/exit-preview')
  }

  // Get redir path
  const redirPath = searchParams.get('redirect') ?? '/'

  draftMode().enable()
  return redirect(redirPath)
}
