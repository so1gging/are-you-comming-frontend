'use client'
import { Inter } from 'next/font/google'
import { SWRConfig } from 'swr'
// These styles apply to every route in the application
import './globals.css'
import Script from 'next/script'

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
        <body className={`${inter.className} w-screen h-screen bg-bg01`}>
          <Script
            type="text/javascript"
            strategy="beforeInteractive"
            src={`https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.MAP_CLIENT_ID}`}
          />
          {children}
        </body>
      </html>
    </SWRConfig>
  )
}
