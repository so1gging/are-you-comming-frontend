'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { SWRConfig } from 'swr'
import GlobalStyle from '@/lib/styles/GlobalStyle'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
      }}
    >
      <GlobalStyle />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </SWRConfig>
  )
}
