import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TeamManagementApp',
  description: 'This is a team management app made by Nigel Sebastian on Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body>{children}</body>
    </html>
  )
}
