import { FC, PropsWithChildren } from 'react'

const ListItem: FC<PropsWithChildren> = ({ children }) => (
  <div className="w-full h-90 flex justify-between items-center border-b-bg01 border-b">{children}</div>
)

export default ListItem
