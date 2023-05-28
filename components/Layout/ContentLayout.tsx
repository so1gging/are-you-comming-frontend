import { FC, PropsWithChildren } from 'react'

interface ContentLayout {
  backgroundColor: 'white' | 'b'
}
const ContentLayout: FC<PropsWithChildren> = ({ children }) => <div className="min-w-full min-h-full">{children}</div>

export default ContentLayout
