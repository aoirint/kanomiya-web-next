import type { Metadata } from 'next'
import './globals.scss'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata: Metadata = {
  title: 'かのみや',
  description: 'かのみやの個人サイト',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ja'>
      <head>
        <GoogleAnalytics />
      </head>
      <body>{children}</body>
    </html>
  )
}
