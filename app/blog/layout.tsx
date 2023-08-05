import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My thoughts on software development and more.'
}

export default async function BlogLayout({
  children
}: {
  children: ReactNode
}) {
  return <>{children}</>
}
