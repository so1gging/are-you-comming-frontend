import { PropsWithChildren } from 'react'

interface RoundWrapProps {
  className?: string
}
function RoundWrap({ children, className }: PropsWithChildren<RoundWrapProps>) {
  return <div className={`w-full p-6 bg-white rounded-2xl ${className}`}>{children}</div>
}

export default RoundWrap
