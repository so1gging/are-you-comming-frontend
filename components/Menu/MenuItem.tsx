import { FC } from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'
import ArrowRight from '@/assets/image/arrow-right.svg'

interface MenuItemProps {
  href: string | UrlObject
  text: string
}
const MenuItem: FC<MenuItemProps> = ({ href, text }) => {
  return (
    <Link href={href} className="w-full h-90 flex justify-between items-center border-b-bg01 border-b">
      <div className="text-h2">{text}</div>
      <ArrowRight color="#1A1E27" />
    </Link>
  )
}

export default MenuItem
