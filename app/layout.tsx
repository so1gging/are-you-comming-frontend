'use client'
import { Inter } from 'next/font/google'
import { SWRConfig } from 'swr'
import ContentLayout from '@/components/Layout/ContentLayout'
// These styles apply to every route in the application
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: true,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} w-screen h-screen bg-white flex items-center justify-center`}>
          <ContentLayout>{children}</ContentLayout>
        </body>
      </html>
    </SWRConfig>
  )
}
