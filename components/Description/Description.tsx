import { FC, PropsWithChildren } from 'react'

const Description: FC<PropsWithChildren> = ({ children }) => {
  return <p className="text-gray01 text-subtitle">{children}</p>
}

export default Description
