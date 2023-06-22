import { PropsWithChildren } from 'react'

function RoundWrap({ children }: PropsWithChildren) {
  return <div className="w-full p-6 bg-white rounded-2xl">{children}</div>
}

export default RoundWrap
