import { FC, PropsWithChildren } from 'react'

interface ContentLayout {
  backgroundColor?: 'white' | 'bg01'
}
const ContentLayout: FC<PropsWithChildren<ContentLayout>> = ({ backgroundColor = 'white', children }) => (
  <main className={`w-full h-full py-10 bg-${backgroundColor} px-8 rounded-xl flex flex-col gap-10`}>{children}</main>
)

export default ContentLayout
