'use client'
import { Inter } from 'next/font/google'
import { SWRConfig } from 'swr'
import GlobalStyle from '@/lib/styles/GlobalStyle'
import styled from 'styled-components'
import ContentLayout from '@/components/layouts/ContentLayout'
import StyledComponentsRegistry from '@/components/StyledComponentsRegistry'

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
        <StyledComponentsRegistry>
          <Body className={inter.className}>
            <ContentLayout>{children}</ContentLayout>
          </Body>
        </StyledComponentsRegistry>
      </html>
    </SWRConfig>
  )
}

const Body = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`
